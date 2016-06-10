'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryKeyboard = require('virtual-keyboard/dist/js/jquery.keyboard.js');

var _jqueryKeyboard2 = _interopRequireDefault(_jqueryKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));

        _this.state = { value: "" };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Set Value to Input Element on Accept
            this.setState({ value: this.props.value });
            this.setState({ className: 'keyboard-wrapper' });

            this.props.options.accepted = function (event, keyboard, el) {
                this.handleChange('', el.value);
                if (typeof this.props.onAccepted == 'function') {
                    this.props.onAccepted(el.value);
                }
                console.log('The content "' + el.value + '" was accepted');
            }.bind(this);

            // Set Class to visible
            this.props.options.visible = function function_name(event, keyboard, el) {
                this.setState({ className: 'keyboard-wrapper open' });
            }.bind(this);

            this.props.options.hidden = function function_name(event, keyboard, el) {
                this.setState({ className: 'keyboard-wrapper' });
            }.bind(this);

            // Set Value to Input Element on Change if prop set
            if (this.props.options.updateOnChange == true) {
                this.props.options.change = function (event, keyboard, el) {
                    this.handleChange('', keyboard.preview.value);
                    console.log('The content "' + el.value + '" was changed', el, keyboard.preview.value);
                }.bind(this);
            }

            //Add jQuery Keyboard to DOM Element
            (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.keyboard)).keyboard(this.props.options);

            // Update while typing if usePreview is false
            if (this.props.options.usePreview === false) {
                (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.keyboard)).on('keyboardChange', function (event, keyboard, el) {
                    this.handleChange(null, keyboard.preview.value);
                }.bind(this));
            }
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.setState({ value: '' });
        }
    }, {
        key: 'select',
        value: function select() {
            this.refs.keyboard.select();
        }
    }, {
        key: 'blur',
        value: function blur() {
            var keyboard = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.keyboard));
            if (keyboard && typeof keyboard.getkeyboard == 'function' && typeof keyboard.getkeyboard().close == 'function') keyboard.getkeyboard().close();
            this.refs.keyboard.blur();
        }
    }, {
        key: 'checkValidity',
        value: function checkValidity() {
            return this.refs.keyboard.checkValidity();
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event, input) {
            if (!input && event.target && event.target.value) input = event.target.value;
            console.log("change", input, event, this);
            this.setState({ value: input });
            this.props.onChange(input);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var options = _props.options;
            var value = _props.value;
            var validation = _props.validation;
            var onChange = _props.onChange;

            var other = _objectWithoutProperties(_props, ['options', 'value', 'validation', 'onChange']);

            if (this.props.options.type == 'textarea') {
                var element = _react2.default.createElement('textarea', _extends({ ref: 'keyboard', value: this.state.value, onChange: this.handleChange }, other));
            } else {
                var element = _react2.default.createElement('input', _extends({ ref: 'keyboard', value: this.state.value, onChange: this.handleChange }, other));
            }
            return _react2.default.createElement(
                'div',
                { 'class': 'keyboard-wrapper', className: this.state.className },
                ' ',
                element,
                ' '
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
