import pick from 'lodash.pick';
import {FloatingMenu} from '../components/floating_menu';
import genPoddaLoader from '../libs/gen_podda_loader';
import compose from '../../../compose';

export const mapper = (state, props, { actions }) => {
  const actionMap = actions();
  const { selectedKind, selectedStory, shortcutOptions } = state;

  const data = {
    selectedKind,
    selectedStory,
    shortcutOptions,
    emulShortcuts: actionMap.shortcuts.handleEvent,
  }

  return data;
};

export default compose(genPoddaLoader(mapper))(FloatingMenu);
