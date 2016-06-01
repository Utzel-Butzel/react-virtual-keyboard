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
        // Set Value to Input Element on Accept
        this.setState({ value: this.props.value });
        this.setState({ className: 'keyboard-wrapper' });

        this.props.options.accepted = function(event, keyboard, el) {
            this.handleChange('', el.value);
            console.log('The content "' + el.value + '" was accepted');
        }.bind(this);

        // Set Class to visible
        this.props.options.visible = function function_name(event, keyboard, el) {
            console.log(keyboard);
            this.setState({ className: 'keyboard-wrapper open' });
        }.bind(this);

        this.props.options.hidden = function function_name(event, keyboard, el) {
            console.log(keyboard);
            this.setState({ className: 'keyboard-wrapper' });
        }.bind(this);

        // Set Value to Input Element on Change if prop set
        if (this.props.options.updateOnChange == true) {
            this.props.options.change = function(event, keyboard, el) {
                this.handleChange('', keyboard.preview.value);
                console.log('The content "' + el.value + '" was changed', el, keyboard.preview.value);
            }.bind(this);
        }

        //Add jQuery Keyboard to DOM Element
        jQuery(ReactDOM.findDOMNode(this.refs.keyboard)).keyboard(this.props.options);

    }
    clear() {
        this.setState({ value: '' });
    }
    select() {
        this.refs.keyboard.select();
    }
    handleChange(event, input) {
        if(!input && event.target && event.target.value)
          input = event.target.value;
        console.log("change", input, event, this);
        this.setState({ value: input });
        this.props.onChange(input);
    }
    render() {
    var { options, value, onChange, ...other } = this.props;
    if (this.props.options.type == 'textarea') {
         var element = ( <textarea ref="keyboard" value = { this.state.value } onChange = { this.handleChange } {...other}/> );
     }
     else {
        var element = ( <input ref="keyboard" value = { this.state.value } onChange = { this.handleChange } {...other} /> );
     }
        return ( <div class="keyboard-wrapper" className={this.state.className} > { element } </div> );
    }
}
