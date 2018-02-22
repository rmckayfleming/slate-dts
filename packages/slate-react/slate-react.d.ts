// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../react

declare module 'slate-react' {
    import Editor from 'slate-react/components/editor';
    import cloneFragment from 'slate-react/utils/clone-fragment';
    import findDOMNode from 'slate-react/utils/find-dom-node';
    import findDOMRange from 'slate-react/utils/find-dom-range';
    import findNode from 'slate-react/utils/find-node';
    import findRange from 'slate-react/utils/find-range';
    import getEventRange from 'slate-react/utils/get-event-range';
    import getEventTransfer from 'slate-react/utils/get-event-transfer';
    import setEventTransfer from 'slate-react/utils/set-event-transfer';
    import AfterPlugin from 'slate-react/plugins/after';
    import BeforePlugin from 'slate-react/plugins/before';
    /**
      * Export.
      *
      * @type {Object}
      */
    export { Editor, cloneFragment, findDOMNode, findDOMRange, findNode, findRange, getEventRange, getEventTransfer, setEventTransfer, AfterPlugin, BeforePlugin };
    const _default: {
        Editor: any;
        cloneFragment: any;
        findDOMNode: any;
        findDOMRange: any;
        findNode: any;
        findRange: any;
        getEventRange: any;
        getEventTransfer: any;
        setEventTransfer: any;
        AfterPlugin: any;
        BeforePlugin: any;
    };
    export default _default;
}

declare module 'slate-react/components/editor' {
    import * as React from 'react';
    /**
        * Editor.
        *
        * @type {Component}
        */
    class Editor extends React.Component<{[K in keyof (typeof Editor)['propTypes']]?: any }, any>{
            /**
                * Property types.
                *
                * @type {Object}
                */
            static propTypes: {
                    autoCorrect: any;
                    autoFocus: any;
                    className: any;
                    onChange: any;
                    placeholder: any;
                    plugins: any;
                    readOnly: any;
                    role: any;
                    schema: any;
                    spellCheck: any;
                    style: any;
                    tabIndex: any;
                    value: any;
            };
            /**
                * Default properties.
                *
                * @type {Object}
                */
            static defaultProps: {
                    autoFocus: boolean;
                    autoCorrect: boolean;
                    onChange: any;
                    plugins: any[];
                    readOnly: boolean;
                    schema: {};
                    spellCheck: boolean;
            };
            /**
                * Constructor.
                *
                * @param {Object} props
                */
            constructor(props: any);
            /**
                * When the `props` are updated, create a new `Stack` if necessary and run
                * `onChange` to ensure the value is normalized.
                *
                * @param {Object} props
                */
            componentWillReceiveProps(props: any): void
            /**
                * When the component first mounts, flush any temporary changes.
                */
            componentDidMount(): void
            /**
                * When the component updates, flush any temporary change.
                */
            componentDidUpdate(): void
            /**
                * Queue a `change` object, to be able to flush it later. This is required for
                * when a change needs to be applied to the value, but because of the React
                * lifecycle we can't apply that change immediately. So we cache it here and
                * later can call `this.flushChange()` to flush it.
                *
                * @param {Change} change
                */
            queueChange(change: any): void
            /**
                * Flush a temporarily stored `change` object, for when a change needed to be
                * made but couldn't because of React's lifecycle.
                */
            flushChange(): void
            /**
                * Perform a change on the editor, passing `...args` to `change.call`.
                *
                * @param {Mixed} ...args
                */
            change: (...args: any[]) => void;
            /**
                * Programmatically blur the editor.
                */
            blur(): void
            /**
                * Programmatically focus the editor.
                */
            focus(): void
            /**
                * Getters for exposing public properties of the editor's state.
                */
            readonly schema: any;
            readonly stack: any;
            readonly value: any;
            /**
                * On event.
                *
                * @param {String} handler
                * @param {Event} event
                */
            onEvent(handler: any, event: any): void
            /**
                * On change.
                *
                * @param {Change} change
                */
            onChange(change: any): void
            /**
                * Render the editor.
                *
                * @return {Element}
                */
            render(): any;
            /**
                * Resolve an array of plugins from `plugins` and `schema` props.
                *
                * In addition to the plugins provided in props, this will initialize three
                * other plugins:
                *
                * - The top-level editor plugin, which allows for top-level handlers, etc.
                * - The two "core" plugins, one before all the other and one after.
                *
                * @param {Array|Void} plugins
                * @param {Schema|Object|Void} schema
                * @return {Array}
                */
            resolvePlugins: (plugins: any, schema: any) => any[];
    }
    export default Editor;
}

declare module 'slate-react/utils/clone-fragment' {
    /**
      * Prepares a Slate document fragment to be copied to the clipboard.
      *
      * @param {Event} event
      * @param {Value} value
      * @param {Document} [fragment]
      */
    function cloneFragment(event: any, value: any, fragment?: any): void;
    export default cloneFragment;
}

declare module 'slate-react/utils/find-dom-node' {
    /**
      * Find the DOM node for a `key`.
      *
      * @param {String|Node} key
      * @param {Window} win (optional)
      * @return {Element}
      */
    function findDOMNode(key: any, win?: Window): Element;
    export default findDOMNode;
}

declare module 'slate-react/utils/find-dom-range' {
    /**
      * Find a native DOM range Slate `range`.
      *
      * @param {Range} range
      * @param {Window} win (optional)
      * @return {Object|Null}
      */
    function findDOMRange(range: any, win?: Window): Range;
    export default findDOMRange;
}

declare module 'slate-react/utils/find-node' {
    /**
      * Find a Slate node from a DOM `element`.
      *
      * @param {Element} element
      * @param {Value} value
      * @return {Node|Null}
      */
    function findNode(element: any, value: any): any;
    export default findNode;
}

declare module 'slate-react/utils/find-range' {
    /**
      * Find a Slate range from a DOM `native` selection.
      *
      * @param {Selection} native
      * @param {Value} value
      * @return {Range}
      */
    function findRange(native: any, value: any): any;
    export default findRange;
}

declare module 'slate-react/utils/get-event-range' {
    /**
      * Get the target range from a DOM `event`.
      *
      * @param {Event} event
      * @param {Value} value
      * @return {Range}
      */
    function getEventRange(event: any, value: any): any;
    export default getEventRange;
}

declare module 'slate-react/utils/get-event-transfer' {
    /**
      * Get the transfer data from an `event`.
      *
      * @param {Event} event
      * @return {Object}
      */
    function getEventTransfer(event: any): {
        files: any;
        fragment: any;
        html: any;
        node: any;
        rich: any;
        text: any;
    };
    export default getEventTransfer;
}

declare module 'slate-react/utils/set-event-transfer' {
    /**
      * Set data with `type` and `content` on an `event`.
      *
      * COMPAT: In Edge, custom types throw errors, so embed all non-standard
      * types in text/plain compound object. (2017/7/12)
      *
      * @param {Event} event
      * @param {String} type
      * @param {String} content
      */
    function setEventTransfer(event: any, type: any, content: any): void;
    export default setEventTransfer;
}

declare module 'slate-react/plugins/after' {
    /**
      * The after plugin.
      *
      * @return {Object}
      */
    function AfterPlugin(): {
        onBeforeInput(event: any, change: any, editor: any): void
        onBlur(event: any, change: any, editor: any): void
        onClick(event: any, change: any, editor: any): boolean
        onCopy(event: any, change: any, editor: any): void
        onCut(event: any, change: any, editor: any): void
        onDragEnd(event: any, change: any, editor: any): void
        onDragOver(event: any, change: any, editor: any): void
        onDragStart(event: any, change: any, editor: any): void
        onDrop(event: any, change: any, editor: any): void
        onInput(event: any, change: any, editor: any): void
        onKeyDown(event: any, change: any, editor: any): any
        onPaste(event: any, change: any, editor: any): void
        onSelect(event: any, change: any, editor: any): void
        renderEditor(props: any, editor: any): any
        renderNode(props: any): any
        renderPlaceholder(props: any): any
    };
    export default AfterPlugin;
}

declare module 'slate-react/plugins/before' {
    /**
      * The core before plugin.
      *
      * @return {Object}
      */
    function BeforePlugin(): {
        onBeforeInput(event: any, change: any, editor: any): boolean
        onBlur(event: any, change: any, editor: any): boolean
        onChange(change: any, editor: any): void
        onCompositionEnd(event: any, change: any, editor: any): void
        onCompositionStart(event: any, change: any, editor: any): void
        onCopy(event: any, change: any, editor: any): void
        onCut(event: any, change: any, editor: any): boolean
        onDragEnd(event: any, change: any, editor: any): void
        onDragEnter(event: any, change: any, editor: any): void
        onDragExit(event: any, change: any, editor: any): void
        onDragLeave(event: any, change: any, editor: any): void
        onDragOver(event: any, change: any, editor: any): boolean
        onDragStart(event: any, change: any, editor: any): void
        onDrop(event: any, change: any, editor: any): boolean
        onFocus(event: any, change: any, editor: any): boolean
        onInput(event: any, change: any, editor: any): boolean
        onKeyDown(event: any, change: any, editor: any): boolean
        onPaste(event: any, change: any, editor: any): boolean
        onSelect(event: any, change: any, editor: any): boolean
    };
    export default BeforePlugin;
}

