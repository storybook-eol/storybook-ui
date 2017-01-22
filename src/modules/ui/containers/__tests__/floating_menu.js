const { describe, it } = global;
import { expect } from 'chai';
import { mapper } from '../floating_menu';

describe('manager.ui.containers.floating_menu', () => {
  describe('mapper', () => {
    it('should give correct data', () => {
      const toggleShortcutsHelp = () => 'toggleShortcutsHelp';
      const handleEvent = () => 'handleEvent';

      const state = {
        selectedKind: 'aa',
        selectedStory: 'bb',
        shortcutOptions: { actions: 'cc' },
        emulShortcuts: handleEvent,
        openShortcutsHelp: toggleShortcutsHelp,
      };
      const props = {};
      const env = {
        actions: () => ({
          ui: {
            toggleShortcutsHelp,
          },
          shortcuts: {
            handleEvent,
          },
        }),
      };

      const data = mapper(state, props, env);
      expect(data).to.deep.equal(state);
    });
  });
});
