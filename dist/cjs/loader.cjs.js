'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eae2634f.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["noi-backdrop_10.cjs",[[2,"noi-mobility-traffic",{"showSearch":[32],"errorCode":[32],"loading":[32]}],[2,"noi-search",{"durationMin":[32],"hostClass":[32]}],[2,"noi-stations-modal",{"visible":[4],"selecting":[1],"overlayIndex":[2,"overlay-index"],"searchText":[32],"hostClass":[32]}],[0,"noi-map",{"lat":[1026],"long":[1026],"scale":[1026],"showPopup":[32]}],[2,"noi-backdrop",{"overlayIndex":[2,"overlay-index"],"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]],[2,"noi-path-details",{"startId":[1,"start-id"],"endId":[1,"end-id"],"segmentsTime":[32],"activePath":[32],"highwayTimeMin":[32]}],[2,"noi-input",{"fireFocusEvents":[4,"fire-focus-events"],"autofocus":[4],"clearInput":[4,"clear-input"],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"setBlur":[64],"getInputElement":[64]}],[2,"noi-urban-path"],[2,"noi-station-item",{"name":[1],"position":[2],"isStart":[4,"is-start"],"isEnd":[4,"is-end"]}],[1,"noi-button",{"disabled":[516],"expand":[513],"fill":[1537],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
