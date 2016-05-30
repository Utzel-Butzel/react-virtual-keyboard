'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
                console.log('The content "' + el.value + '" was accepted');
            }.bind(this);

            // Set Class to visible
            this.props.options.visible = function function_name(event, keyboard, el) {
                console.log(keyboard);
                this.setState({ className: 'keyboard-wrapper open' });
            }.bind(this);

            this.props.options.hidden = function function_name(event, keyboard, el) {
                console.log(keyboard);
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
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event, input) {
            console.log("change", input, event, this);
            this.setState({ value: input });
            this.props.callbackParent(input);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.options.type == 'textarea') {
                var element = _react2.default.createElement('textarea', { ref: 'keyboard', name: this.props.name, className: this.props.options.class, value: this.state.value, onChange: this.handleChange });
            } else {
                var element = _react2.default.createElement('input', { ref: 'keyboard', name: this.props.name, className: this.props.options.class, value: this.state.value, onChange: this.handleChange });
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
