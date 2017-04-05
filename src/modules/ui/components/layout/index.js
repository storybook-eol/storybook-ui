import React from 'react';
import Media from 'react-media';
import DesktopLayout from './desktop';
import MobileLayout from './mobile';

const Layout = (props) => (
  <Media query="(max-width: 768px)">
    {matches => {
      return matches ? (
        <MobileLayout {...props} />
      ) : (
        <DesktopLayout {...props} />
      );
    }}
  </Media>
);

Layout.propTypes = {
  showLeftPanel: React.PropTypes.bool.isRequired,
  showDownPanel: React.PropTypes.bool.isRequired,
  goFullScreen: React.PropTypes.bool.isRequired,
  leftPanel: React.PropTypes.func.isRequired,
  preview: React.PropTypes.func.isRequired,
  downPanel: React.PropTypes.func.isRequired,
  downPanelInRight: React.PropTypes.bool.isRequired,
};

export default Layout;
