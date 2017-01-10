import React from 'react';
import { colorScheme } from '../theme';

const rootStyle = {
  backgroundColor: colorScheme.block,
  padding: 6,
  paddingTop: 2,
};

const Footer = ({ children }) => (
  <div style={rootStyle}>
    {children}
  </div>
);

Footer.propTypes = {
  children: React.PropTypes.element,
};

export default Footer;
