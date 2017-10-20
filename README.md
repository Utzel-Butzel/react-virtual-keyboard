React Virtual Keyboard
=====================

A on-screen keyboard (OSK) Component that works in the browser for reactJS. Useful for Kiosk Touchscreens.

Based on the Virtual Keyboard using jQuery:
https://mottie.github.io/Keyboard/

### Usage

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
    layout: "querty",
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
/>
```
You can use the following Options: https://github.com/Mottie/Keyboard/wiki/Options


#### Return updated values
```javascript
onInputChanged = (data) => {
  this.setState({ input: data });
}

onInputSubmitted = (data) => {
  console.log("Input submitted:", data);
}
```

### Dependencies

* React
* Webpack
* jQuery
* [Mottie Keyboard](https://mottie.github.io/Keyboard/)
