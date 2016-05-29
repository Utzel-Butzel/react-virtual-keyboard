React Virtual Keyboard
=====================

A on-screen keyboard (OSK) Component that works in the browser for reactJS.

Based on the Virtual Keyboard using jQuery:
https://mottie.github.io/Keyboard/

* [Mottie Keyboard](https://mottie.github.io/Keyboard/)

### Usage

```
import Keyboard from "../../components/Keyboard";
```


```
onTextareaChanged(newState) {
        this.setState({ textarea: newState });
    }
```

```
<Keyboard value={ this.state.textarea } options={{type:'textarea', layout:'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: true, color:'light', class:'sxcycx'}} callbackParent={this.onTextareaChanged} />
```

### Dependencies

* React
* Webpack
