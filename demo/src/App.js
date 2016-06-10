import React, { Component } from 'react';
import Keyboard from '../../lib/Keyboard';

export default class App extends Component {
	    constructor() {
        super();
        this.state = { textarea: "This is some sample textarea input", inputfield: "Input field" };
        this.onTextareaChanged = this.onTextareaChanged.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.onEmailInputChanged = this.onEmailInputChanged.bind(this);

        this.state = { emailValidator: false };
    }
    onTextareaChanged(newState) {
        this.setState({ textarea: newState });
    }
    onInputChanged(newState) {
        this.setState({ inputfield: newState });
    }
    onEmailInputChanged(input) {
	    console.log("Email input:", input);
	    if (this.refs.emailToInput.checkValidity())
	      this.setState({emailValidator: false });
	  	else
	  	this.setState({emailValidator: true });
	  }
  render() {

  	var display = {
		'bksp'   : '\u2190',
		'enter'  : 'return',
		'default': 'ABC',
		'meta1'  : '.?123',
		'meta2'  : '#+=',
		'accept' : '\u21d3'
	};
  	var customLayout = {
		'default': [
			'q w e r t z u i o p {bksp}',
			'a s d f g h j k l {enter}',
			'{s} y x c v b n m @ . {s}',
			'{meta1} {space} _ - {accept}'
		],
		'shift': [
			'Q W E R T Z U I O P {bksp}',
			'A S D F G H J K L {enter}',
			'{s} Y X C V B N M @ . {s}',
			'{meta1} {space} _ - {accept}'
		],
		'meta1': [
			'1 2 3 4 5 6 7 8 9 0 {bksp}',
			'` | { } % ^ * / \' {enter}',
			'{meta2} $ & ~ # = + . {meta2}',
			'{default} {space} ! ? {accept}'
		],
		'meta2': [
			'[ ] { } \u2039 \u203a ^ * " , {bksp}',
			'\\ | / &lt; &gt; $ \u00a3 \u00a5 \u2022 {enter}',
			'{meta1} \u20ac & ~ # = + . {meta1}',
			'{default} {space} ! ? {accept}'
		]
	};
    return (
	    <div>
	      <h1>Textarea. { this.state.textarea }</h1>
	      <Keyboard value={ this.state.textarea } name='thetextareaname' options={{type:'textarea', usePreview: false, layout:'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: false, updateOnChange: true, color:'light'}} onChange={this.onTextareaChanged} />
	      <h1>Input. { this.state.inputfield }</h1>
	      <Keyboard value={ this.state.inputfield } name='thename' options={{usePreview: false, type:'input', layout:'qwerty', autoAccept: true, alwaysOpen: false, color:'light', layout: 'custom',display, customLayout}} onChange={this.onInputChanged} />
	      <h1>E-Mail Input</h1>
	      <p>The caret cursor position is not working correctly when using type='email', thats why we use type='text' and an email check pattern. <a href="https://github.com/Mottie/Keyboard/issues/241">http://github.com/Mottie/Keyboard/issues/241</a></p> 
	        <Keyboard 
              name="emailTo"
              ref="emailToInput"
              type="text"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              placeholder="Ihre Emailadresse"
              onChange={ this.onEmailInputChanged }
              options={{ usePreview: false, stickyShift: false }}
               />
              <span className={ this.state.emailValidator ? "errormsg invalid" : "errormsg" }>Bitte geben Sie eine E-Mailadresse an</span>
	    </div>
    );
  }
}