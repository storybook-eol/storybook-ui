'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _floating_menu = require('../../containers/floating_menu');

var _floating_menu2 = _interopRequireDefault(_floating_menu);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootStyle = {
  backgroundColor: _theme.colorScheme.block,
  padding: 6,
  paddingTop: 2,
  marginTop: 10
};

var Menu = function Menu() {
  return _react2.default.createElement(
    'div',
    { style: rootStyle },
    _react2.default.createElement(_floating_menu2.default, { downDirection: true })
  );
};

exports.default = Menu;
