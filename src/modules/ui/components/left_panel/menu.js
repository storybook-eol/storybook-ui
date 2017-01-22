import React from 'react';
import FloatingMenu from '../../containers/floating_menu';
import { colorScheme } from '../theme';

const rootStyle = {
  backgroundColor: colorScheme.block,
  padding: 6,
  paddingTop: 2,
  marginTop: 10,
};

const Footer = () => (
  <div style={rootStyle}>
    <FloatingMenu downDirection />
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.element,
};

export default Footer;
