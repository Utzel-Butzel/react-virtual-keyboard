declare module "virtual-keyboard" {

    export interface Options {
        type: string;
        layout?: string;
        color?: string;
        class?: string;
        updateOnChange?: boolean;
        customLayout?: string[];
        position?: boolean | Object;
        reposition?: boolean;
        css?: Object;
        display?: Object;
        language?: string | string[];
        wheelMessage?: string;
        comboRegex?: RegExp;
        rtl?: boolean;
        acceptValid?: boolean;
        alwaysOpen?: boolean;
        appendLocally?: boolean;
        appendTo?: string | Object;
        autoAccept?: boolean;
        autoAcceptOnEsc?: boolean;
        autoAcceptOnValid?: boolean;
        cancelClose?: boolean;
        caretToEnd?: boolean;
        closeByClickEvent?: boolean;
        combos?: Object;
        enterMod?: string;
        enterNavigation?: boolean;
        ignoreEsc?: boolean;
        initialFocus?: boolean;
        keyBinding?: string;
        lockInput?: boolean;
        maxInsert?: boolean;
        maxLength?: boolean | number;
        noFocus?: boolean;
        openOn?: string;
        preventPaste?: string;
        repeatDelay?: number;
        repeatRate?: number;
        resetDefault?: boolean;
        restrictInclude?: string;
        restrictInput?: boolean;
        scrollAdjustment?: number | string;
        stayOpen?: boolean;
        stickyShift?: boolean;
        stopAtEnd?: boolean;
        tabNavigation?: boolean;
        useCombos?: boolean;
        usePreview?: boolean;
        useWheel?: boolean;
        userClosed?: boolean;
        accepted?: (event: Event, keyboard: Element, el: Element) => void;
        beforeClose?: () => any;
        beforeInsert?: () => any;
        beforeVisible?: () => any;
        buildKey?: () => any;
        canceled?: () => any;
        change?: (event: Event, keyboard: Element, el: Element) => void;
        hidden?: (event: Event, keyboard: Element, el: Element) => void;
        initialized?: () => any;
        restricted?: () => any;
        switchInput?: () => any;
        validate?: () => any;
        visible?: (event: Event, keyboard: Element, el: Element) => void;

    }
}

declare module "react-virtual-keyboard" {
    import {Component} from "react";
    import {Options} from "virtual-keyboard";
    
    export interface KeyboardProps {
        name?: string;
        value?: string;
        options?: Options;
        callbackParent?: (e?: Event) => void;
    }

    export interface KeyboardState {
        value: string;
        className: string;
    }

    export default class Keyboard extends React.Component<KeyboardProps, KeyboardState> { }
}