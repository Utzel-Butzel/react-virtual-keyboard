React Virtual Keyboard
=====================

Currently WiP:

A on-screen keyboard (OSK) Component that works in the browser for reactJS.

Based on the Virtual Keyboard using jQuery:
https://mottie.github.io/Keyboard/

* [Mottie Keyboard](https://mottie.github.io/Keyboard/)

### Usage

#### Import Keyboard
```
import Keyboard from "../../components/Keyboard";
```

#### Use Keyboard Element
```
<Keyboard value={ this.state.textarea } options={{type:'textarea', layout:'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: true, color:'light', class:'sxcycx'}} callbackParent={this.onTextareaChanged} />
```

#### Return updated values
```
onTextareaChanged(newState) {
        this.setState({ textarea: newState });
    }
```

### Dependencies

* React
* Webpack
