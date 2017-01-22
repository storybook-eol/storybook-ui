'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapperStyle = {
  background: '#F7F7F7',
  marginBottom: 10
};

var headingStyle = (0, _extends3.default)({}, _theme.baseFonts, {
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  color: '#828282',
  border: '1px solid #C1C1C1',
  textAlign: 'center',
  borderRadius: '2px',
  padding: '5px',
  cursor: 'pointer',
  margin: 0,
  float: 'none',
  overflow: 'hidden'
});

var linkStyle = {
  textDecoration: 'none'
};

var Header = function Header(_ref) {
  var name = _ref.name,
      url = _ref.url;
  return _react2.default.createElement(
    'div',
    { style: wrapperStyle },
    _react2.default.createElement(
      'a',
      { style: linkStyle, href: url, target: '_blank' },
      _react2.default.createElement(
        'h3',
        { style: headingStyle },
        name
      )
    )
  );
};

Header.propTypes = {
  openShortcutsHelp: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string
};

exports.default = Header;
