import React from "react";

export default class extends React.Component {
  handleFocus(event) {
    console.log("focus");
      /* var keyVal = 65;
      jQuery("#eventTarg").trigger ( {
            type: 'keypress', keyCode: keyVal, which: keyVal, charCode: keyVal
        } ); */
    //this.setState({liked: !this.state.liked});
  }
  handleBlur(event) {
    console.log("blur");
    //this.setState({liked: !this.state.liked});
  }
  handleKey(event) {
    console.log("Handle key");
          var keyboardEvent = document.createEvent("KeyboardEvent");
      var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
      keyboardEvent[initMethod](
                         "keydown", // event type : keydown, keyup, keypress
                          true, // bubbles
                          true, // cancelable
                          window, // viewArg: should be window
                          false, // ctrlKeyArg
                          false, // altKeyArg
                          false, // shiftKeyArg
                          false, // metaKeyArg
                          65, // keyCodeArg : unsigned long the virtual key code, else 0
                          0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
      );
      document.dispatchEvent(keyboardEvent);
  }
  render() {
    //const { props } = this.props.title;
    //console.log( {props}, this.props.title);
    return (
      <div class="col-md-4">
        <textarea onFocus={this.handleFocus} onClick={this.handleKey}  onBlur={this.handleBlur}></textarea>
        <button onClick={this.handleKey} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
