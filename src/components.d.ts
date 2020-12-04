/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputChangeEventDetail, StyleEventDetail, TextFieldTypes } from "./components/input/input";
export namespace Components {
    interface NoiBackdrop {
        "overlayIndex": number;
        "stopPropagation": boolean;
        "tappable": boolean;
        "visible": boolean;
    }
    interface NoiButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong": boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": 'submit' | 'reset' | 'button';
    }
    interface NoiInput {
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `noiChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        /**
          * This is required for a WebKit bug which requires us to blur and focus an input to properly focus the input in an item with delegatesFocus. It will no longer be needed with iOS 14.
         */
        "fireFocusEvents": boolean;
        /**
          * Returns the native `<input>` element used under the hood.
         */
        "getInputElement": () => Promise<HTMLInputElement>;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'search';
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `ion-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type": TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null | undefined;
    }
    interface NoiMap {
        "lat": number;
        "long": number;
        "scale": number;
    }
    interface NoiMobilityTraffic {
    }
    interface NoiPathDetails {
    }
    interface NoiSearch {
    }
    interface NoiStationItem {
        "isEnd": boolean;
        "isSelected": boolean;
        "isStart": boolean;
        "name": string;
        "position": number;
        "time": number;
    }
    interface NoiStationsModal {
        "overlayIndex": number;
        "selecting": 'start' | 'end';
        "visible": boolean;
    }
    interface NoiUrbanPath {
    }
}
declare global {
    interface HTMLNoiBackdropElement extends Components.NoiBackdrop, HTMLStencilElement {
    }
    var HTMLNoiBackdropElement: {
        prototype: HTMLNoiBackdropElement;
        new (): HTMLNoiBackdropElement;
    };
    interface HTMLNoiButtonElement extends Components.NoiButton, HTMLStencilElement {
    }
    var HTMLNoiButtonElement: {
        prototype: HTMLNoiButtonElement;
        new (): HTMLNoiButtonElement;
    };
    interface HTMLNoiInputElement extends Components.NoiInput, HTMLStencilElement {
    }
    var HTMLNoiInputElement: {
        prototype: HTMLNoiInputElement;
        new (): HTMLNoiInputElement;
    };
    interface HTMLNoiMapElement extends Components.NoiMap, HTMLStencilElement {
    }
    var HTMLNoiMapElement: {
        prototype: HTMLNoiMapElement;
        new (): HTMLNoiMapElement;
    };
    interface HTMLNoiMobilityTrafficElement extends Components.NoiMobilityTraffic, HTMLStencilElement {
    }
    var HTMLNoiMobilityTrafficElement: {
        prototype: HTMLNoiMobilityTrafficElement;
        new (): HTMLNoiMobilityTrafficElement;
    };
    interface HTMLNoiPathDetailsElement extends Components.NoiPathDetails, HTMLStencilElement {
    }
    var HTMLNoiPathDetailsElement: {
        prototype: HTMLNoiPathDetailsElement;
        new (): HTMLNoiPathDetailsElement;
    };
    interface HTMLNoiSearchElement extends Components.NoiSearch, HTMLStencilElement {
    }
    var HTMLNoiSearchElement: {
        prototype: HTMLNoiSearchElement;
        new (): HTMLNoiSearchElement;
    };
    interface HTMLNoiStationItemElement extends Components.NoiStationItem, HTMLStencilElement {
    }
    var HTMLNoiStationItemElement: {
        prototype: HTMLNoiStationItemElement;
        new (): HTMLNoiStationItemElement;
    };
    interface HTMLNoiStationsModalElement extends Components.NoiStationsModal, HTMLStencilElement {
    }
    var HTMLNoiStationsModalElement: {
        prototype: HTMLNoiStationsModalElement;
        new (): HTMLNoiStationsModalElement;
    };
    interface HTMLNoiUrbanPathElement extends Components.NoiUrbanPath, HTMLStencilElement {
    }
    var HTMLNoiUrbanPathElement: {
        prototype: HTMLNoiUrbanPathElement;
        new (): HTMLNoiUrbanPathElement;
    };
    interface HTMLElementTagNameMap {
        "noi-backdrop": HTMLNoiBackdropElement;
        "noi-button": HTMLNoiButtonElement;
        "noi-input": HTMLNoiInputElement;
        "noi-map": HTMLNoiMapElement;
        "noi-mobility-traffic": HTMLNoiMobilityTrafficElement;
        "noi-path-details": HTMLNoiPathDetailsElement;
        "noi-search": HTMLNoiSearchElement;
        "noi-station-item": HTMLNoiStationItemElement;
        "noi-stations-modal": HTMLNoiStationsModalElement;
        "noi-urban-path": HTMLNoiUrbanPathElement;
    }
}
declare namespace LocalJSX {
    interface NoiBackdrop {
        "onNoiBackdropTap"?: (event: CustomEvent<void>) => void;
        "overlayIndex"?: number;
        "stopPropagation"?: boolean;
        "tappable"?: boolean;
        "visible"?: boolean;
    }
    interface NoiButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
         */
        "expand"?: 'full' | 'block';
        /**
          * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
         */
        "fill"?: 'clear' | 'outline' | 'solid' | 'default';
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        /**
          * Emitted when the button loses focus.
         */
        "onNoiBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onNoiFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The button shape.
         */
        "shape"?: 'round';
        /**
          * The button size.
         */
        "size"?: 'small' | 'default' | 'large';
        /**
          * If `true`, activates a button with a heavier font weight.
         */
        "strong"?: boolean;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface NoiInput {
        /**
          * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `noiChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.
         */
        "enterkeyhint"?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        /**
          * This is required for a WebKit bug which requires us to blur and focus an input to properly focus the input in an item with delegatesFocus. It will no longer be needed with iOS 14.
         */
        "fireFocusEvents"?: boolean;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputmode"?: 'none' | 'text' | 'search';
        /**
          * The maximum value, which must not be less than its minimum (min attribute) value.
         */
        "max"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
         */
        "maxlength"?: number;
        /**
          * The minimum value, which must not be greater than its maximum (max attribute) value.
         */
        "min"?: string;
        /**
          * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        "minlength"?: number;
        /**
          * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
         */
        "multiple"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onNoiBlur"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onNoiChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onNoiFocus"?: (event: CustomEvent<FocusEvent>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onNoiInput"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the styles change.
         */
        "onNoiStyle"?: (event: CustomEvent<StyleEventDetail>) => void;
        /**
          * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
         */
        "pattern"?: string;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user cannot modify the value.
         */
        "readonly"?: boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
         */
        "size"?: number;
        /**
          * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
         */
        "step"?: string;
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: TextFieldTypes;
        /**
          * The value of the input.
         */
        "value"?: string | number | null | undefined;
    }
    interface NoiMap {
        "lat"?: number;
        "long"?: number;
        "scale"?: number;
    }
    interface NoiMobilityTraffic {
    }
    interface NoiPathDetails {
        "onToggleActive"?: (event: CustomEvent<'urban' | 'highway'>) => void;
    }
    interface NoiSearch {
    }
    interface NoiStationItem {
        "isEnd"?: boolean;
        "isSelected"?: boolean;
        "isStart"?: boolean;
        "name": string;
        "position": number;
        "time"?: number;
    }
    interface NoiStationsModal {
        "onModalClose"?: (event: CustomEvent<{stationId: string}>) => void;
        "overlayIndex"?: number;
        "selecting"?: 'start' | 'end';
        "visible"?: boolean;
    }
    interface NoiUrbanPath {
    }
    interface IntrinsicElements {
        "noi-backdrop": NoiBackdrop;
        "noi-button": NoiButton;
        "noi-input": NoiInput;
        "noi-map": NoiMap;
        "noi-mobility-traffic": NoiMobilityTraffic;
        "noi-path-details": NoiPathDetails;
        "noi-search": NoiSearch;
        "noi-station-item": NoiStationItem;
        "noi-stations-modal": NoiStationsModal;
        "noi-urban-path": NoiUrbanPath;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "noi-backdrop": LocalJSX.NoiBackdrop & JSXBase.HTMLAttributes<HTMLNoiBackdropElement>;
            "noi-button": LocalJSX.NoiButton & JSXBase.HTMLAttributes<HTMLNoiButtonElement>;
            "noi-input": LocalJSX.NoiInput & JSXBase.HTMLAttributes<HTMLNoiInputElement>;
            "noi-map": LocalJSX.NoiMap & JSXBase.HTMLAttributes<HTMLNoiMapElement>;
            "noi-mobility-traffic": LocalJSX.NoiMobilityTraffic & JSXBase.HTMLAttributes<HTMLNoiMobilityTrafficElement>;
            "noi-path-details": LocalJSX.NoiPathDetails & JSXBase.HTMLAttributes<HTMLNoiPathDetailsElement>;
            "noi-search": LocalJSX.NoiSearch & JSXBase.HTMLAttributes<HTMLNoiSearchElement>;
            "noi-station-item": LocalJSX.NoiStationItem & JSXBase.HTMLAttributes<HTMLNoiStationItemElement>;
            "noi-stations-modal": LocalJSX.NoiStationsModal & JSXBase.HTMLAttributes<HTMLNoiStationsModalElement>;
            "noi-urban-path": LocalJSX.NoiUrbanPath & JSXBase.HTMLAttributes<HTMLNoiUrbanPathElement>;
        }
    }
}
