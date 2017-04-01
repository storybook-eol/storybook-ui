import routes from './routes';
import actions from './actions';
import initPanels from './configs/init_panels';
import handleRouting from './configs/handle_routing';
import handleKeyEvents from './configs/handle_keyevents';
import { boxPositions } from '../../libs/menu_positions';

export default {
  routes,
  actions,
  defaultState: {
    showShortcutsHelp: false,
    floatingBoxOptions: {
      showFloatingBox: true,
      floatingBoxPosition: boxPositions.BOTTOM_LEFT,
    },
  },
  load(c, a) {
    initPanels(c, a);
    handleRouting(c, a);
    handleKeyEvents(a);
  },
};
