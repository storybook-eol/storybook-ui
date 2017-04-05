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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootStyle = {
  height: '100%',
  backgroundColor: '#F7F7F7'
};

var leftPanelStyle = {
  display: 'block',
  width: '100%'
};

var contentPanelStyle = {
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '0'
};

var normalPreviewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  borderTop: '1px solid #ECECEC'
};

var fullScreenPreviewStyle = {
  position: 'fixed',
  left: '0px',
  right: '0px',
  top: '0px',
  zIndex: 1,
  backgroundColor: '#FFF',
  height: '100%',
  width: '100%',
  border: 0,
  margin: 0,
  padding: 0,
  overflow: 'hidden'
};

var LayoutMobile = function (_React$Component) {
  (0, _inherits3.default)(LayoutMobile, _React$Component);

  function LayoutMobile() {
    (0, _classCallCheck3.default)(this, LayoutMobile);
    return (0, _possibleConstructorReturn3.default)(this, (LayoutMobile.__proto__ || (0, _getPrototypeOf2.default)(LayoutMobile)).apply(this, arguments));
  }

  (0, _createClass3.default)(LayoutMobile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          goFullScreen = _props.goFullScreen,
          showLeftPanel = _props.showLeftPanel,
          leftPanel = _props.leftPanel,
          preview = _props.preview;

      var previewStyle = goFullScreen ? fullScreenPreviewStyle : normalPreviewStyle;

      return _react2.default.createElement(
        'div',
        { style: rootStyle },
        _react2.default.createElement(
          'div',
          { style: leftPanelStyle },
          showLeftPanel && leftPanel()
        ),
        _react2.default.createElement(
          'div',
          { style: contentPanelStyle },
          _react2.default.createElement(
            'div',
            { style: previewStyle },
            preview()
          )
        )
      );
    }
  }]);
  return LayoutMobile;
}(_react2.default.Component);

LayoutMobile.propTypes = {
  showLeftPanel: _react2.default.PropTypes.bool.isRequired,
  goFullScreen: _react2.default.PropTypes.bool.isRequired,
  leftPanel: _react2.default.PropTypes.func.isRequired,
  preview: _react2.default.PropTypes.func.isRequired
};

exports.default = LayoutMobile;