'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapperStyles = (0, _extends3.default)({
  display: 'block',
  paddingTop: '10px',
  paddingBottom: '15px',
  listStyle: 'none',
  fontSize: '18px',
  fontWeight: 'bold'
}, _theme.baseFonts);

var childrenStyles = {
  marginLeft: '5px'
};

var iconStyles = {
  float: 'right',
  fontWeight: 'normal',
  fontSize: '150%',
  lineHeight: '0.65'
};

var Collapsible = function (_React$Component) {
  (0, _inherits3.default)(Collapsible, _React$Component);

  function Collapsible(props) {
    (0, _classCallCheck3.default)(this, Collapsible);

    // Collapsible will be closed by default but
    // allows props to be passed in to override initialState
    var _this = (0, _possibleConstructorReturn3.default)(this, (Collapsible.__proto__ || (0, _getPrototypeOf2.default)(Collapsible)).call(this, props));

    _this.state = { isActive: props.isActive || false };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.focusToContent = _this.focusToContent.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Collapsible, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isActive === nextProps.isActive) return;
      this.setState({
        isActive: nextProps.isActive
      });
    }
  }, {
    key: 'focusToContent',
    value: function focusToContent() {
      var content = this.collapsibleBody;
      if (content) {
        content.focus();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({
        isActive: !this.state.isActive
      }, this.focusToContent);
      // We will execute any additional onClick handlers that are passed
      // to the component
      var onClick = this.props.onClick;

      if (onClick) {
        onClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$tagName = _props.tagName,
          tagName = _props$tagName === undefined ? 'div' : _props$tagName,
          children = _props.children,
          title = _props.title,
          _props$id = _props.id,
          id = _props$id === undefined ? encodeURI(title) : _props$id;
      var isActive = this.state.isActive;

      var headingStyles = (0, _extends3.default)({}, wrapperStyles, {
        textDecoration: isActive ? 'underline' : 'none'
      });
      var Element = tagName;

      return _react2.default.createElement(
        Element,
        null,
        _react2.default.createElement(
          'a',
          {
            href: '#' + id,
            onClick: this.handleClick,
            'aria-label': isActive ? title + ' - hides content' : title + ' - shows more content',
            style: headingStyles
          },
          title,
          _react2.default.createElement(
            'span',
            { style: iconStyles },
            isActive ? '-' : '+'
          )
        ),
        isActive && _react2.default.createElement(
          'div',
          {
            id: id,
            ref: function ref(c) {
              return _this2.collapsibleBody = c;
            } // eslint-disable-line no-return-assign
            , tabIndex: '-1',
            style: childrenStyles
          },
          children
        )
      );
    }
  }]);
  return Collapsible;
}(_react2.default.Component);

Collapsible.propTypes = {
  tagName: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string,
  isActive: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func
};

exports.default = Collapsible;