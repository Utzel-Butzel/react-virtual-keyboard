'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import keyboard from 'virtual-keyboard/dist/js/jquery.keyboard.js';

export default class extends React.Component {
    constructor() {
        super();
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // Set Value to Input Element
        this.setState({ value: this.props.value });
        this.props.options.accepted = function(event, keyboard, el) {
            this.handleChange('', el.value);
            console.log('The content "' + el.value + '" was accepted');
        }.bind(this);
        //Add jQuery Keyboard to DOM Element
        jQuery(ReactDOM.findDOMNode(this.refs.keyboard)).keyboard(this.props.options);

    }
    handleChange(event, input) {
        console.log("change", input, event, this);
        this.setState({ value: input });
        this.props.callbackParent(input);
    }
    render() {
    if (this.props.options.type == 'textarea') {
         var element = ( <textarea ref="keyboard" className = { this.props.options.class } value = { this.state.value } onChange = { this.handleChange } /> );
     }
     else {
        element = ( <input ref="keyboard" className = { this.props.options.class } value = { this.state.value } onChange = { this.handleChange } /> );
     }
        return ( <div className="keyboard-wrapper" > { element } </div> );
    }
}
