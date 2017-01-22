import React from 'react';
import FloatingMenu from '../../containers/floating_menu';
import { colorScheme } from '../theme';

const rootStyle = {
  backgroundColor: colorScheme.block,
  padding: 6,
  paddingTop: 2,
  marginTop: 10,
};

const Menu = () => (
  <div style={rootStyle}>
    <FloatingMenu downDirection />
  </div>
);

export default Menu;
