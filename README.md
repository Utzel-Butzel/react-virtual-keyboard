React Virtual Keyboard
=====================

A on-screen keyboard (OSK) Component that works in the browser for reactJS. Useful for Kiosk Touchscreens.

Based on the Virtual Keyboard using jQuery:
https://mottie.github.io/Keyboard/

### Usage

#### Installation
```
npm install react-virtual-keyboard
```

#### Import Keyboard
```javascript
import Keyboard from 'react-virtual-keyboard';
```

#### Use Keyboard Element
```html
<Keyboard 
  value={this.state.input}
  name='keyboard'
  options={{
    type:"input",
    layout: "qwerty",
    alwaysOpen: true,
    usePreview: false,
    useWheel: false,
    stickyShift: false,
    appendLocally: true,
    color: "light",
    updateOnChange: true,
    initialFocus: true,
    display: {
      "accept" : "Submit"
    }
  }}
  onChange={this.onInputChanged}
  onAccepted={this.onInputSubmitted}
  ref={k => this.keyboard = k}
/>
```

#### Return updated values
```javascript
onInputChanged = (data) => {
  this.setState({ input: data });
}

onInputSubmitted = (data) => {
  console.log("Input submitted:", data);
}
```

#### Listen for button presses
```javascript
this.keyboard.interface.keyaction.enter = (base) => {
  // Enter button pressed
  // Accepting content, as an example:
  return this.keyboard.interface.keyaction.accept(base);
};
```

For more information, check out the API documentation: https://github.com/Mottie/Keyboard/wiki/Options

### Dependencies

* React
* Webpack
* jQuery
* [Mottie Keyboard](https://mottie.github.io/Keyboard/)
