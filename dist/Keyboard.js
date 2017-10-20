'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryKeyboard = require('virtual-keyboard/dist/js/jquery.keyboard.js');

var _jqueryKeyboard2 = _interopRequireDefault(_jqueryKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualKeyboard = function (_Component) {
  _inherits(VirtualKeyboard, _Component);

  function VirtualKeyboard(props) {
    _classCallCheck(this, VirtualKeyboard);

    var _this = _possibleConstructorReturn(this, (VirtualKeyboard.__proto__ || Object.getPrototypeOf(VirtualKeyboard)).call(this, props));

    _this.handleChange = function (event, input) {
      if (!input && event && event.target && typeof event.target.value != 'undefined') input = event.target.value;
      if (_this.props.debug) {
        console.log("Change", input);
      }
      _this.setState({
        value: input
      });
      _this.props.onChange(input);
    };

    _this.state = {
      value: "",
      className: 'keyboard-wrapper'
    };
    return _this;
  }

  _createClass(VirtualKeyboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Set Value to Input Element on Accept
      this.setState({
        value: this.props.value
      });

      this.props.options.accepted = function (event, keyboard, el) {
        _this2.handleChange('', el.value);
        if (typeof _this2.props.onAccepted === 'function') {
          _this2.props.onAccepted(el.value);
        }
        if (_this2.props.debug) {
          console.log('The content "' + el.value + '" was accepted');
        }
      };

      // Set Class to visible
      this.props.options.visible = function () {
        _this2.setState({
          className: 'keyboard-wrapper open'
        });
      };

      this.props.options.hidden = function () {
        _this2.setState({
          className: 'keyboard-wrapper'
        });
      };

      // Set Value to Input Element on Change if prop set
      if (this.props.options.updateOnChange === true) {
        this.props.options.change = function (event, keyboard, el) {
          _this2.handleChange('', keyboard.preview.value);
          if (_this2.props.debug) {
            console.log('The content "' + el.value + '" was changed');
          }
        };
      }

      // Add jQuery Keyboard to DOM Element
      this.addKeyBoardToDOM();

      // Update while typing if usePreview is false
      if (this.props.options.usePreview === false) {
        (0, _jquery2.default)(this.keyboardRef).on('keyboardChange', function (event, keyboard) {
          _this2.handleChange(null, keyboard.preview.value);
        });
      }
    }
  }, {
    key: 'addKeyBoardToDOM',
    value: function addKeyBoardToDOM() {
      var keyboardSelector = (0, _jquery2.default)(this.keyboardRef);
      keyboardSelector.keyboard(this.props.options);

      /**
       * Get instantiated keyboard
       */
      this.keyboard = keyboardSelector.getkeyboard();

      /**
       * Get keyboard plugin interface
       * Useful for accessing root plugin functionality
       * 
       * @example
       * // Listen for enter button press
       * this.keyboard.interface.keyaction.enter = (base) => {
       *  // Enter button pressed, accepting content
       *  return this.keyboard.interface.keyaction.accept(base);
       * };
       */
      this.interface = _jqueryKeyboard2.default;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({
        value: ''
      });
    }
  }, {
    key: 'select',
    value: function select() {
      this.keyboardRef.select();
    }
  }, {
    key: 'blur',
    value: function blur() {
      var keyboard = (0, _jquery2.default)(this.keyboardRef);
      if (keyboard && typeof keyboard.getkeyboard === 'function' && typeof keyboard.getkeyboard().close === 'function') keyboard.getkeyboard().close();
      this.keyboardRef.blur();
    }
  }, {
    key: 'checkValidity',
    value: function checkValidity() {
      return this.keyboardRef.checkValidity();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _jquery2.default)(this.keyboardRef).remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          options = _props.options,
          value = _props.value,
          validation = _props.validation,
          onChange = _props.onChange,
          other = _objectWithoutProperties(_props, ['options', 'value', 'validation', 'onChange']);

      var element;

      if (this.props.options.type === 'textarea') element = _react2.default.createElement('textarea', _extends({ ref: function ref(node) {
          return _this3.keyboardRef = node;
        }, value: this.state.value, onChange: this.handleChange }, other));else element = _react2.default.createElement('input', _extends({ ref: function ref(node) {
          return _this3.keyboardRef = node;
        }, value: this.state.value, onChange: this.handleChange }, other));

      return _react2.default.createElement(
        'div',
        { className: this.state.className },
        ' ',
        element,
        ' '
      );
    }
  }]);

  return VirtualKeyboard;
}(_react.Component);

VirtualKeyboard.propTypes = {
  value: _propTypes2.default.string,
  options: _propTypes2.default.object,
  onAccepted: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  debug: _propTypes2.default.bool,
  validation: _propTypes2.default.func
};

exports.default = VirtualKeyboard;
