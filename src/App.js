import React, { Component } from 'react';
import Keyboard from "../components/Keyboard";

export default class App extends Component {
  render() {
    return (
	    <div>
	      <h1>Hello, world.</h1>
	      <Keyboard value='jbjhhj' options={{type:'textarea', layout:'qwerty', color:'light', class:'sxcycx'}} />
	    </div>
    );
  }
}