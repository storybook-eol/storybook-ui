'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../left_panel/header');

var _header2 = _interopRequireDefault(_header);

var _stories = require('../left_panel/stories');

var _stories2 = _interopRequireDefault(_stories);

var _text_filter = require('../left_panel/text_filter');

var _text_filter2 = _interopRequireDefault(_text_filter);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _collapsible = require('../collapsible');

var _collapsible2 = _interopRequireDefault(_collapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainStyle = {
  padding: '10px'
};

var storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

var MenuMobile = function MenuMobile(props) {
  return _react2.default.createElement(
    'div',
    { style: mainStyle },
    _react2.default.createElement(_header2.default, {
      name: props.name,
      url: props.url,
      openShortcutsHelp: props.openShortcutsHelp
    }),
    _react2.default.createElement(_text_filter2.default, {
      text: props.storyFilter,
      onClear: function onClear() {
        return props.onStoryFilter('');
      },
      onChange: function onChange(text) {
        return props.onStoryFilter(text);
      }
    }),
    _react2.default.createElement(
      _collapsible2.default,
      {
        isVisible: props.isMobile,
        isActive: (0, _lodash4.default)(props.storyFilter),
        title: 'component list'
      },
      props.stories ? _react2.default.createElement(_stories2.default, (0, _lodash2.default)(props, storyProps)) : null
    )
  );
};

MenuMobile.propTypes = {
  stories: _react2.default.PropTypes.array,
  selectedKind: _react2.default.PropTypes.string,
  selectedStory: _react2.default.PropTypes.string,
  onSelectStory: _react2.default.PropTypes.func,

  storyFilter: _react2.default.PropTypes.string,
  onStoryFilter: _react2.default.PropTypes.func,

  openShortcutsHelp: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string,

  isMobile: _react2.default.PropTypes.string
};

exports.default = MenuMobile;