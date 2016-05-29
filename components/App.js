import React, { Component } from "react";
import Keyboard from "../components/Keyboard";
//import KeyboardElement from "../components/KeyboardElement";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    const { counter } = this.state;
    return (
      <header>
        <div>Keyboard Demo</div>
        <Keyboard options={{layout:'qwerty', color:'light'}} />
      </header>
    );
  }
}
