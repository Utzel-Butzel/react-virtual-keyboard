import React from "react";
import ReactDOM from 'react-dom';

export default class extends React.Component {
    constructor() {
        super();
        this.state = { value: "mmmmmm" };
        //this.rand = Math.floor((Math.random() * 10000)); 
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        var jQuery = require('virtual-keyboard/node_modules/jquery/dist/jquery.js');
        var keyboard = require('virtual-keyboard/dist/js/jquery.keyboard.js');
        this.setState( { value: this.props.value } );
        jQuery(ReactDOM.findDOMNode(this.refs.keyboard)).keyboard({
            //usePreview: false,
            layout: this.props.options.layout,
            accepted: function(event, keyboard, el) {
                this.handleChange('', el.value);
                console.log('The content "' + el.value + '" was accepted');
            }.bind(this)
        });
    }
    handleFocus(event) {
        console.log("focus");
    }
    handleBlur(event) {
            console.log("blur");
    }
    handleChange(event, input) {
        console.log("change", input, event, this);
        this.setState({ value: input });
    }
    render() {
    if (this.props.options.type == 'textarea') {
         var element = ( <textarea ref="keyboard" className = { this.props.options.class } value = { this.state.value } onChange = { this.handleChange } /> );
     }
     else {
        element = ( <input ref="keyboard" className = { this.props.options.class } value = { this.state.value } onChange = { this.handleChange } /> );
     }
        return ( <div>{ element }</div> );
    }
}
