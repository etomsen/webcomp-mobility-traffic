import { r as registerInstance, l as h, m as Host } from './index-683b5499.js';
import { g as getIonMode } from './ionic-global-02d40d5a.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";

const Thumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Thumbnail.style = thumbnailCss;

export { Thumbnail as ion_thumbnail };
