'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _desktop = require('./desktop');

var _desktop2 = _interopRequireDefault(_desktop);

var _mobile = require('./mobile');

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement(
    _reactMedia2.default,
    { query: '(max-width: 768px)' },
    function (matches) {
      return matches ? _react2.default.createElement(_mobile2.default, props) : _react2.default.createElement(_desktop2.default, props);
    }
  );
};

Layout.propTypes = {
  showLeftPanel: _react2.default.PropTypes.bool.isRequired,
  showDownPanel: _react2.default.PropTypes.bool.isRequired,
  goFullScreen: _react2.default.PropTypes.bool.isRequired,
  leftPanel: _react2.default.PropTypes.func.isRequired,
  preview: _react2.default.PropTypes.func.isRequired,
  downPanel: _react2.default.PropTypes.func.isRequired,
  downPanelInRight: _react2.default.PropTypes.bool.isRequired
};

exports.default = Layout;