'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _floating_menu = require('../../containers/floating_menu');

var _floating_menu2 = _interopRequireDefault(_floating_menu);

var _theme = require('../theme');

var _menu_positions = require('../../../../libs/menu_positions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootStyle = (0, _extends3.default)({
  position: 'absolute',

  backgroundColor: _theme.colorScheme.block,
  borderRadius: 2,
  paddingBottom: 2
}, _theme.floating);

function getPosition(pos) {
  switch (pos) {
    case _menu_positions.boxPositions.BOTTOM_RIGHT:
      return {
        right: 10,
        bottom: 20
      };
    case _menu_positions.boxPositions.TOP_LEFT:
      return {
        left: 10,
        top: 20
      };
    case _menu_positions.boxPositions.TOP_RIGHT:
      return {
        right: 10,
        top: 20
      };
    default:
      return {
        left: 10,
        bottom: 20
      };
  }
}

var FloatingBlock = function FloatingBlock(_ref) {
  var position = _ref.position;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, rootStyle, getPosition(position)) },
    _react2.default.createElement(_floating_menu2.default, {
      downDirection: position === (_menu_positions.boxPositions.TOP_LEFT || _menu_positions.boxPositions.TOP_RIGHT)
    })
  );
};

FloatingBlock.propTypes = {
  position: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.element
};

exports.default = FloatingBlock;
