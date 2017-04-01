const { describe, it } = global;
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Menu from '../menu.js';
import { colorScheme } from '../../theme';

describe('manager.ui.components.left_panel.menu', () => {
  it('should have theme based background color', function () {
    const wrap = shallow(<Menu />);

    const root = wrap.find('div').first();
    expect(root.props().style.backgroundColor).to.equal(colorScheme.block);
  });
});
