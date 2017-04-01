const { describe, it } = global;
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header.js';
import { expect } from 'chai';

describe('manager.ui.components.left_panel.header', () => {
  it('should render the Title and URL', function () {
    const title = 'Storybook UI';
    const url = 'www.example.com';
    const wrap = shallow(<Header name={title} url={url} />);

    const h3 = wrap.find('h3').first();
    expect(h3.text()).to.equal(title);

    const link = wrap.find('a').first();
    expect(link.props().href).to.equal(url);
  });
});
