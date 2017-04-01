const { describe, it, beforeEach } = global;
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Menu from '../floating_block.js';
import FloatingMenu from '../floating_menu.js';
import { colorScheme } from '../../theme';
import { boxPositions } from '../../../../../libs/menu_positions';
import { features } from '../../../../../libs/key_events';

describe('manager.ui.components.floating_menu.floating_block', () => {
  it('should have theme based background color', function () {
    const wrap = shallow(<Menu />);
    const root = wrap.find('div').first();
    expect(root.props().style.backgroundColor).to.equal(colorScheme.block);
  });

  it('should have the right position', function () {
    const wrap = shallow(<Menu position={boxPositions.BOTTOM_RIGHT} />);
    const root = wrap.find('div').first();
    expect(root.props().style).to.contain.all.keys({ right: 10, bottom: 20 });
  });
});

describe('manager.ui.components.floating_menu', () => {
  describe('should fire api callbacks when clicked on shortcut buttons:', () => {
    let emulShortcuts = sinon.stub();
    let openShortcutsHelp = sinon.stub();
    let wrap;

    beforeEach(() => {
      emulShortcuts = sinon.stub();
      openShortcutsHelp = sinon.stub();
      wrap = shallow(
        <FloatingMenu
          emulShortcuts={emulShortcuts}
          openShortcutsHelp={openShortcutsHelp}
          shortcutOptions={{}}
        />
      );
    });

    it('features.FULLSCREEN', () => {
      const button = wrap.find('div.floating-menu-button').at(0);
      button.simulate('click');
      expect(emulShortcuts.firstCall.args).to.deep.equal([features.FULLSCREEN]);
    });

    it('features.DOWN_PANEL', () => {
      const button = wrap.find('div.floating-menu-button').at(1);
      button.simulate('click');
      expect(emulShortcuts.firstCall.args).to.deep.equal([features.DOWN_PANEL]);
    });

    it('features.LEFT_PANEL', () => {
      const button = wrap.find('div.floating-menu-button').at(2);
      button.simulate('click');
      expect(emulShortcuts.firstCall.args).to.deep.equal([features.LEFT_PANEL]);
    });

    it('features.DOWN_PANEL_IN_RIGHT', () => {
      const button = wrap.find('div.floating-menu-button').at(3);
      button.simulate('click');
      expect(emulShortcuts.firstCall.args).to.deep.equal([features.DOWN_PANEL_IN_RIGHT]);
    });

    it('features.SEARCH', () => {
      const button = wrap.find('div.floating-menu-button').at(4);
//      console.log(button.props())
      button.simulate('click');
      expect(emulShortcuts.firstCall.args).to.deep.equal([features.SEARCH]);
    });

    it('Open Shortcuts Help', () => {
      const button = wrap.find('div.floating-menu-button').last();
      button.simulate('click');
      expect(openShortcutsHelp.callCount).to.be.equal(1);
    });
  });
});
