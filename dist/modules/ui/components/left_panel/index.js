'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _stories = require('./stories');

var _stories2 = _interopRequireDefault(_stories);

var _text_filter = require('./text_filter');

var _text_filter2 = _interopRequireDefault(_text_filter);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _collapsible = require('../collapsible');

var _collapsible2 = _interopRequireDefault(_collapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollStyle = {
  height: 'calc(100vh - 105px)',
  overflow: 'auto'
};

var mobileScrollStyle = {
  maxHeight: 'calc(100vw + 100px)',
  overflow: 'auto'
};

/* eslint-disable react/prop-types */
var HeaderAndFilter = function HeaderAndFilter(props) {
  return _react2.default.createElement(
    'div',
    null,
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
    })
  );
};
/* eslint-enable react/prop-types */

var storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

var LeftPanel = function LeftPanel(props) {
  return _react2.default.createElement(
    _reactMedia2.default,
    { query: '(max-width: 768px)' },
    function (matches) {
      return matches ? _react2.default.createElement(
        'div',
        { style: { padding: '10px' } },
        _react2.default.createElement(HeaderAndFilter, props),
        _react2.default.createElement(
          _collapsible2.default,
          {
            isActive: (0, _lodash4.default)(props.storyFilter),
            title: 'component list'
          },
          props.stories && _react2.default.createElement(
            'div',
            { style: mobileScrollStyle },
            _react2.default.createElement(_stories2.default, (0, _lodash2.default)(props, storyProps))
          )
        )
      ) : _react2.default.createElement(
        'div',
        { style: { padding: '10px 0 10px 10px' } },
        _react2.default.createElement(HeaderAndFilter, props),
        _react2.default.createElement(
          'div',
          { style: scrollStyle },
          props.stories ? _react2.default.createElement(_stories2.default, (0, _lodash2.default)(props, storyProps)) : null
        )
      );
    }
  );
};

LeftPanel.propTypes = {
  stories: _react2.default.PropTypes.array,
  selectedKind: _react2.default.PropTypes.string,
  selectedStory: _react2.default.PropTypes.string,
  onSelectStory: _react2.default.PropTypes.func,

  storyFilter: _react2.default.PropTypes.string,
  onStoryFilter: _react2.default.PropTypes.func,

  openShortcutsHelp: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string
};

exports.default = LeftPanel;