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

var _vsplit = require('./vsplit');

var _vsplit2 = _interopRequireDefault(_vsplit);

var _hsplit = require('./hsplit');

var _hsplit2 = _interopRequireDefault(_hsplit);

var _dimensions = require('./dimensions');

var _dimensions2 = _interopRequireDefault(_dimensions);

var _reactSplitPane = require('@kadira/react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootStyle = {
  height: '100vh',
  backgroundColor: '#F7F7F7'
};

var leftPanelStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%'
};

var downPanelStyle = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '5px 10px 10px 0',
  boxSizing: 'border-box'
};

var contentPanelStyle = {
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '10px 10px 10px 0'
};

var normalPreviewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  border: '1px solid #ECECEC',
  borderRadius: 4
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

var vsplit = _react2.default.createElement(_vsplit2.default, null);
var hsplit = _react2.default.createElement(_hsplit2.default, null);

var onDragStart = function onDragStart() {
  document.body.classList.add('dragging');
};

var onDragEnd = function onDragEnd() {
  document.body.classList.remove('dragging');
};

var saveHeightPanel = function saveHeightPanel(h) {
  try {
    localStorage.setItem('splitPos', h);
    return true;
  } catch (e) {
    return false;
  }
};

var getSavedHeight = function getSavedHeight(h) {
  try {
    return localStorage.getItem('splitPos');
  } catch (e) {
    return h;
  }
};

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      previewPanelDimensions: {
        height: 0,
        width: 0
      }
    };

    _this.onResize = _this.onResize.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var _previewPanelRef = this.previewPanelRef,
          clientWidth = _previewPanelRef.clientWidth,
          clientHeight = _previewPanelRef.clientHeight;


      this.setState({
        previewPanelDimensions: {
          width: clientWidth,
          height: clientHeight
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          goFullScreen = _props.goFullScreen,
          showLeftPanel = _props.showLeftPanel,
          showDownPanel = _props.showDownPanel,
          downPanelInRight = _props.downPanelInRight,
          downPanel = _props.downPanel,
          leftPanel = _props.leftPanel,
          preview = _props.preview;
      var previewPanelDimensions = this.state.previewPanelDimensions;


      var previewStyle = normalPreviewStyle;

      if (goFullScreen) {
        previewStyle = fullScreenPreviewStyle;
      }

      var leftPanelDefaultSize = showLeftPanel ? 250 : 1;
      var downPanelDefaultSize = 1;
      if (showDownPanel) {
        downPanelDefaultSize = downPanelInRight ? 400 : 200;
      }

      // Get the value from localStorage or user downPanelDefaultSize
      downPanelDefaultSize = getSavedHeight(downPanelDefaultSize);

      return _react2.default.createElement(
        'div',
        { style: rootStyle },
        _react2.default.createElement(
          _reactSplitPane2.default,
          {
            split: 'vertical',
            minSize: leftPanelDefaultSize,
            defaultSize: leftPanelDefaultSize,
            resizerChildren: vsplit,
            onDragStarted: onDragStart,
            onDragFinished: onDragEnd,
            onChange: this.onResize
          },
          _react2.default.createElement(
            'div',
            { style: leftPanelStyle },
            showLeftPanel ? leftPanel() : null
          ),
          _react2.default.createElement(
            _reactSplitPane2.default,
            {
              split: downPanelInRight ? 'vertical' : 'horizontal',
              primary: 'second',
              minSize: downPanelInRight ? 200 : 100,
              defaultSize: downPanelDefaultSize,
              resizerChildren: downPanelInRight ? vsplit : hsplit,
              onDragStarted: onDragStart,
              onDragFinished: onDragEnd,
              onChange: function onChange(size) {
                saveHeightPanel(size);
                _this2.onResize();
              }
            },
            _react2.default.createElement(
              'div',
              { style: contentPanelStyle },
              _react2.default.createElement(
                'div',
                {
                  style: previewStyle,
                  ref: function ref(_ref) {
                    _this2.previewPanelRef = _ref;
                  }
                },
                preview()
              ),
              _react2.default.createElement(_dimensions2.default, previewPanelDimensions)
            ),
            _react2.default.createElement(
              'div',
              { style: downPanelStyle },
              showDownPanel ? downPanel() : null
            )
          )
        )
      );
    }
  }]);
  return Layout;
}(_react2.default.Component);

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