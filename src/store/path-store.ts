import { NoiError, NOI_ERR_UNKNOWN } from '@noi/api/error';
import { createStore, ObservableMap } from '@stencil/store';
import { NoiAPI, NoiLinkStation } from '../api';

export interface NoiPathState {
  startId: string;
  endId: string;
  path: Array<NoiLinkStation>;
  readonly loading: boolean;
  readonly errorCode: string;
  readonly stations: Array<{position: number, id: string, name: string}>;
  readonly duration: number;
  readonly distance: number;
}

const urbanPathStore = createStore<NoiPathState>({
  startId: undefined,
  endId: undefined,
  loading: false,
  errorCode: undefined,
  path: undefined,
  stations: undefined,
  duration: undefined,
  distance: undefined
});

export const urbanPathState = setupPathStore(urbanPathStore);

function setupPathStore(store: ObservableMap<NoiPathState>) {
  const { onChange, set, state } = store;

  onChange('path', (path) => {
    debugger;
    if (!path || !path.length) {
      set('stations', undefined);
      return;
    }
    const stations = path.reduce((result, i) => {
      result.push({
        position: result[result.length-1].position + i.distance,
        id: i.end.id,
        name: i.end.name
      });
      return result;
    }, [{position: 0, name: path[0].start.name, id: path[0].start.id}]);
    set('stations', stations);
  });

  onChange('stations', (value) => {
    debugger;
    const distance = value && value.length ? value[value.length-1].position : undefined;
    set('distance', distance);
  })

  onChange('startId', (value) => {
    debugger;
    set('path', undefined);
    set('errorCode', undefined);
    if (!!value && state.endId) {
      // FIXME: unsubscribe from hanging promise if it's still loading
      loadUrbanPath(value, state.endId);
    }
  });

  onChange('endId', (value) => {
    debugger;
    set('path', undefined);
    set('errorCode', undefined);
    if (!!value && state.startId) {
      // FIXME: unsubscribe from hanging promise if it's still loading
      loadUrbanPath(state.startId, value);
    }
  });


  function loadUrbanPath(startId: string, endId: string): void {
    debugger;
    set('loading', true);
    set('errorCode', undefined);
    loadUrbanPathEffect(startId, endId)
      .then(path => {
        debugger;
        set('path', path);
      })
      .catch(err => {
        debugger;
        if (err instanceof NoiError) {
          set('errorCode', (err as NoiError).code);
        } else {
          set('errorCode', NOI_ERR_UNKNOWN);
        }
      })
      .finally(() => {
        debugger;
        set('loading', false);
      });
  }
  return store.state;
}

/**
 * it's like a Redux Effect to load external data in async way
 */
async function loadUrbanPathEffect(startId: string, endId: string): Promise<Array<NoiLinkStation>> {
  const urbanPath = (await NoiAPI.getUrbanSegmentsIds(startId, endId));
  return urbanPath
    ? await NoiAPI.getLinkStationsByIds(urbanPath, {calcGeometryDistance: true})
    : undefined;
}


