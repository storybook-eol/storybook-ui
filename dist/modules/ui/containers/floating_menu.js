'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = undefined;

var _floating_menu = require('../components/floating_menu');

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = exports.mapper = function mapper(state, props, _ref) {
  var actions = _ref.actions;

  var actionMap = actions();
  var selectedKind = state.selectedKind,
      selectedStory = state.selectedStory,
      shortcutOptions = state.shortcutOptions;


  var data = {
    selectedKind: selectedKind,
    selectedStory: selectedStory,
    shortcutOptions: shortcutOptions,
    emulShortcuts: actionMap.shortcuts.handleEvent,
    openShortcutsHelp: actionMap.ui.toggleShortcutsHelp
  };

  return data;
};

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_floating_menu.FloatingMenu);
