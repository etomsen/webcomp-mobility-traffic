import { NoiError, NOI_ERR_UNKNOWN } from '@noi/api/error';
import { createStore } from '@stencil/store';
import { cancellablePromise } from '@noi/utils';
import { NoiAPI } from '../api';
const urbanPathStore = createStore({
  startId: undefined,
  endId: undefined,
  loading: false,
  errorCode: undefined,
  path: undefined,
  stations: undefined,
  durationMin: undefined,
  distance: undefined
});
const { onChange, set, state } = urbanPathStore;
let effectPromise = undefined;
onChange('path', (path) => {
  if (!path || !path.length) {
    set('stations', undefined);
    return;
  }
  const stations = path.reduce((result, i) => {
    result.push({
      position: result[result.length - 1].position + i.distance,
      id: i.end.id,
      name: i.end.name
    });
    return result;
  }, [{ position: 0, name: path[0].start.name, id: path[0].start.id }]);
  set('stations', stations);
});
onChange('stations', (value) => {
  const distance = value && value.length ? value[value.length - 1].position : undefined;
  set('distance', Math.round(distance));
});
onChange('startId', (value) => {
  set('path', undefined);
  set('durationMin', undefined);
  set('errorCode', undefined);
  if (!!value && state.endId) {
    loadUrbanPath(value, state.endId);
  }
});
onChange('endId', (value) => {
  set('path', undefined);
  set('durationMin', undefined);
  set('errorCode', undefined);
  if (!!value && state.startId) {
    loadUrbanPath(state.startId, value);
  }
});
function loadUrbanPath(startId, endId) {
  set('loading', true);
  set('errorCode', undefined);
  if (effectPromise) {
    effectPromise.cancel();
  }
  effectPromise = cancellablePromise(loadUrbanPathEffect(startId, endId));
  effectPromise.promise
    .then(data => {
    set('path', data.path);
    set('durationMin', data.timeMin);
    set('loading', false);
    effectPromise = undefined;
  })
    .catch(err => {
    if (err.isCancelled) {
      return;
    }
    effectPromise = undefined;
    set('loading', false);
    if (err instanceof NoiError) {
      set('errorCode', err.code);
    }
    else {
      set('errorCode', NOI_ERR_UNKNOWN);
    }
  });
}
export const urbanPathState = state;
/**
 * it's like a Redux Effect to load external data in async way
 */
async function loadUrbanPathEffect(startId, endId) {
  const segmentsIds = (await NoiAPI.getUrbanSegmentsIds(startId, endId));
  if (!segmentsIds) {
    return undefined;
  }
  const path = await NoiAPI.getLinkStationsByIds(segmentsIds, { calcGeometryDistance: true });
  const velocityMap = (await NoiAPI.getLinkStationsVelocity(path.map(i => i.id))).reduce((result, i) => { result[i.id] = i.velocityKmH; return result; }, {});
  const timeMin = path.reduce((result, i) => {
    const timeMin = Math.round((i.distance / (1000 * velocityMap[i.id])) * 60);
    result += timeMin;
    return result;
  }, 0);
  return { path, timeMin };
}