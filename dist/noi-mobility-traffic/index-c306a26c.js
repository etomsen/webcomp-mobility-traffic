import { i as getRenderingRef, j as forceUpdate } from './index-34381826.js';

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = ({ on }) => {
    const elmsToUpdate = new Map();
    if (typeof getRenderingRef === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', () => {
            elmsToUpdate.clear();
        });
        on('get', (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        });
    }
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => subscriptions.forEach((subscription) => {
        if (subscription.set) {
            on('set', subscription.set);
        }
        if (subscription.get) {
            on('get', subscription.get);
        }
        if (subscription.reset) {
            on('reset', subscription.reset);
        }
    });
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};

function orderStations(value) {
  return Object.keys(value)
    .map(i => value[i])
    .sort((a, b) => a.position > b.position ? 1 : -1);
}
const { state, onChange, set } = createStore({
  selecting: null,
  selectedId: '',
  startId: '',
  endId: '',
  stations: undefined,
  start: null,
  end: null,
  selected: null,
  stationsList: null,
  loading: true
});
onChange('stations', (stations) => {
  if (stations) {
    set('loading', false);
    set('stationsList', orderStations(stations));
  }
  else {
    set('stationsList', null);
    set('loading', true);
  }
});
onChange('selectedId', (selectedId) => {
  if (selectedId) {
    set('selected', state.stations[selectedId]);
  }
  else {
    set('selected', null);
  }
});
onChange('startId', (value) => {
  state.selecting = null;
  if (value) {
    set('start', state.stations[value]);
    if (state.endId === value) {
      set('endId', null);
    }
  }
  else {
    set('start', null);
  }
});
onChange('endId', (value) => {
  state.selecting = null;
  if (value) {
    set('end', state.stations[value]);
    if (state.startId === value) {
      set('startId', null);
    }
  }
  else {
    set('end', null);
  }
});
function selectStationsWithSelected() {
  return !state.stations ? null : state.stationsList.map(s => (Object.assign(Object.assign({}, s), { selected: s.id === state.selectedId })));
}
function selectStationsWithSelectedWithStartEnd() {
  return !state.stations ? null : state.stationsList.map(s => (Object.assign(Object.assign({}, s), { selected: s.id === state.selectedId, isStart: s.id === state.startId, isEnd: s.id === state.endId })));
}
function selectStartEnd() {
  return !state.stations ? null : state.stationsList
    .filter(s => s.id === state.startId || s.id === state.endId)
    .map(s => (Object.assign(Object.assign({}, s), { selected: s.id === state.selectedId, isStart: s.id === state.startId, isEnd: s.id === state.endId })));
}
function selectPathStations() {
  if (!state.stations || !state.startId || !state.endId) {
    return null;
  }
  const startPos = state.start.position;
  const endPos = state.end.position;
  return state.stationsList.reduce((result, i) => {
    if (startPos < endPos && i.position <= endPos && i.position >= startPos) {
      result.push(Object.assign({}, i));
    }
    if (startPos > endPos && i.position >= endPos && i.position <= startPos) {
      result.push(Object.assign({}, i));
    }
    return result;
  }, [])
    .map(s => (Object.assign(Object.assign({}, s), { selected: s.id === state.selectedId, isStart: s.id === state.startId, isEnd: s.id === state.endId })))
    .sort((a, b) => {
    if (startPos < endPos && a.position > b.position)
      return 1;
    if (startPos > endPos && a.position < b.position)
      return 1;
    return -1;
  });
}
function selectPathSegmentsIds() {
  return selectPathStations().reduce((result, s) => {
    if (!!result.lastId) {
      result.data.push(`${result.lastId}-${s.id}`);
    }
    result.lastId = s.id;
    return result;
  }, { data: [], lastId: '' }).data;
}
function selectCanLoadPath() {
  return !!state.startId && !!state.endId;
}

export { selectStationsWithSelectedWithStartEnd as a, selectStartEnd as b, selectCanLoadPath as c, selectStationsWithSelected as d, selectPathSegmentsIds as e, selectPathStations as f, state as s };
