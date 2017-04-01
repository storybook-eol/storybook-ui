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

var _key_events = require('../../../../libs/key_events');

var _theme = require('../theme');

var _svg_package = require('./svg_package');

var _svg_package2 = _interopRequireDefault(_svg_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION = '100ms linear 0ms';

var rootStyle = (0, _extends3.default)({}, _theme.baseFonts, {
  fontSize: 12,
  backgroundColor: _theme.colorScheme.block,
  paddingTop: 4,
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'height ' + TRANSITION
});

function getOptionsList(shortcutOptions, platform) {
  // manage two separate shortcut keys for
  // 'mac' & other (windows, linux) platforms
  var isMac = platform && platform.indexOf('mac') !== -1;
  var keyTemplate = isMac ? ['⌘ ⇧ ', '⌃ ⇧ '] : ['Ctrl + Shift + '];
  var getKeys = function getKeys(key) {
    return keyTemplate.map(function (val) {
      return val.concat(key);
    }).join(' / ');
  };

  var OptionsList = [{
    name: 'Fullscreen Mode',
    keys: getKeys('F'),
    event: _key_events.features.FULLSCREEN,
    value: shortcutOptions.goFullScreen
  }, {
    name: 'Addons Panel',
    keys: getKeys('D'),
    event: _key_events.features.DOWN_PANEL,
    value: shortcutOptions.showDownPanel
  }, {
    name: 'Stories Panel',
    keys: getKeys('L'),
    event: _key_events.features.LEFT_PANEL,
    value: shortcutOptions.showLeftPanel
  }, {
    name: 'Addons Panel on the right',
    keys: getKeys('J'),
    event: _key_events.features.DOWN_PANEL_IN_RIGHT,
    value: shortcutOptions.downPanelInRight
  }, {
    name: 'Search Box',
    keys: getKeys('P'),
    event: _key_events.features.SEARCH,
    value: shortcutOptions.showSearchBox
  }];
  return OptionsList;
}

var FloatingMenu = function (_React$Component) {
  (0, _inherits3.default)(FloatingMenu, _React$Component);

  function FloatingMenu(props) {
    (0, _classCallCheck3.default)(this, FloatingMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FloatingMenu.__proto__ || (0, _getPrototypeOf2.default)(FloatingMenu)).call(this, props));

    _this.state = {
      collapsed: true,
      short: false
    };

    _this.hadnleMenu = _this.hadnleMenu.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FloatingMenu, [{
    key: 'handleOption',
    value: function handleOption(event) {
      var _this2 = this;

      return function () {
        _this2.props.emulShortcuts(event);
      };
    }
  }, {
    key: 'hadnleMenu',
    value: function hadnleMenu() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this3 = this;

      var itemStyle = {
        cursor: 'pointer',
        userSelect: 'none',
        backgroundColor: _theme.colorScheme.canvasAlt,
        margin: 4,
        marginBottom: 1,
        marginTop: 1,
        padding: 1,
        paddingRight: 8,
        paddingLeft: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      };

      var iconStyle = {
        width: 18,
        opacity: _theme.colorScheme.iconsOpacity,
        marginRight: 8
      };

      var blockStyle = {
        overflowY: 'hidden',
        backgroundColor: _theme.colorScheme.layoutAlt
      };

      var option = function option(val, key) {
        return _react2.default.createElement(
          'div',
          {
            key: key,
            style: itemStyle,
            onClick: _this3.handleOption(val.event),
            title: val.keys,
            className: 'floating-menu-button'
          },
          _react2.default.createElement('img', {
            style: iconStyle,
            src: val.value ? _svg_package2.default.checked_box : _svg_package2.default.unchecked_box,
            alt: 'checked_box'
          }),
          _react2.default.createElement(
            'span',
            null,
            '' + val.name
          )
        );
      };

      var shorcuts = _react2.default.createElement(
        'div',
        {
          style: itemStyle,
          onClick: this.props.openShortcutsHelp,
          className: 'floating-menu-button'
        },
        _react2.default.createElement('img', {
          style: iconStyle,
          src: _svg_package2.default.help,
          alt: '?'
        }),
        _react2.default.createElement(
          'span',
          null,
          'Keyboard Shortcuts'
        )
      );

      return _react2.default.createElement(
        'div',
        { style: blockStyle, key: 'options' },
        _react2.default.createElement('div', { style: (0, _extends3.default)({}, itemStyle, { height: 1 }) }),
        getOptionsList(this.props.shortcutOptions).map(function (val, ind) {
          return option(val, ind);
        }),
        shorcuts,
        _react2.default.createElement('div', { style: (0, _extends3.default)({}, itemStyle, { height: 20 }) })
      );
    }
  }, {
    key: 'renderNavigation',
    value: function renderNavigation() {
      var blockStyle = {
        background: _theme.colorScheme.block,
        height: 22,
        paddingLeft: 6,
        display: 'flex',
        justifyContent: 'space-between'
      };

      var btnsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: 8
      };

      var iconStyle = {
        width: 22,
        margin: '0px 6px',
        opacity: _theme.colorScheme.iconsOpacity,
        cursor: 'pointer'
      };

      var menuStyle = (0, _extends3.default)({}, iconStyle, {
        margin: 0,
        transition: 'transform ' + TRANSITION,
        transform: this.state.collapsed ? 'rotate(-0.25turn)' : ''
      });

      return _react2.default.createElement(
        'div',
        { key: 'navigation' },
        _react2.default.createElement(
          'div',
          { style: blockStyle },
          _react2.default.createElement('img', {
            style: menuStyle,
            src: _svg_package2.default.menu,
            alt: 'menu', title: 'toggle menu',
            onClick: this.hadnleMenu
          }),
          _react2.default.createElement(
            'div',
            { style: btnsStyle },
            _react2.default.createElement(
              'div',
              { onClick: this.handleOption(_key_events.features.PREV_KIND) },
              _react2.default.createElement('img', {
                style: iconStyle,
                src: _svg_package2.default.fast_rewind,
                alt: 'previous', title: 'previous story group'
              })
            ),
            _react2.default.createElement(
              'div',
              { onClick: this.handleOption(_key_events.features.PREV_STORY) },
              _react2.default.createElement('img', {
                style: iconStyle,
                src: _svg_package2.default.skip_previous,
                alt: 'previous', title: 'previous story'
              })
            ),
            _react2.default.createElement(
              'div',
              { onClick: this.handleOption(_key_events.features.NEXT_STORY) },
              _react2.default.createElement('img', {
                style: iconStyle,
                src: _svg_package2.default.skip_next,
                alt: 'next', title: 'next story'
              })
            ),
            _react2.default.createElement(
              'div',
              { onClick: this.handleOption(_key_events.features.NEXT_KIND) },
              _react2.default.createElement('img', {
                style: iconStyle,
                src: _svg_package2.default.fast_forward,
                alt: 'next', title: 'next story group'
              })
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var blockStyle = (0, _extends3.default)({}, rootStyle, {
        height: this.state.collapsed ? 22 : 158 });
      var content = [this.renderOptions(), this.renderNavigation()];

      return _react2.default.createElement(
        'div',
        { style: blockStyle },
        this.props.downDirection ? content.reverse() : content
      );
    }
  }]);
  return FloatingMenu;
}(_react2.default.Component);

FloatingMenu.propTypes = {
  selectedKind: _react2.default.PropTypes.string,
  selectedStory: _react2.default.PropTypes.string,
  shortcutOptions: _react2.default.PropTypes.object,
  emulShortcuts: _react2.default.PropTypes.func,
  openShortcutsHelp: _react2.default.PropTypes.func,
  downDirection: _react2.default.PropTypes.bool
};

FloatingMenu.defaultProps = {
  downDirection: false
};

exports.default = FloatingMenu;
