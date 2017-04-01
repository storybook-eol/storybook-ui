import React from 'react';
import { baseFonts } from '../theme';

const wrapperStyle = {
  background: '#F7F7F7',
  marginBottom: 10,
};

const headingStyle = {
  ...baseFonts,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  color: '#828282',
  border: '1px solid #C1C1C1',
  textAlign: 'center',
  borderRadius: '2px',
  padding: '5px',
  cursor: 'pointer',
  margin: 0,
  float: 'none',
  overflow: 'hidden',
};

const linkStyle = {
  textDecoration: 'none',
};

const Header = ({ name, url }) => (
  <div style={wrapperStyle}>
    <a style={linkStyle} href={url} target="_blank">
      <h3 style={headingStyle}>{name}</h3>
    </a>
  </div>
);

Header.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default Header;
