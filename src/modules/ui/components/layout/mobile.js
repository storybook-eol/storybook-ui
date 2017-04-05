import React from 'react';

const rootStyle = {
  height: '100%',
  backgroundColor: '#F7F7F7',
};

const leftPanelStyle = {
  display: 'block',
  width: '100%',
};

const contentPanelStyle = {
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '0',
};

const normalPreviewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  borderTop: '1px solid #ECECEC',
};

const fullScreenPreviewStyle = {
  position: 'fixed',
  left: '0px',
  right: '0px',
  top: '0px',
  zIndex: 1,
  backgroundColor: '#FFF',
  height: '100%',
  width: '100%',
  border: 0,
  margin: 0,
  padding: 0,
  overflow: 'hidden',
};

class LayoutMobile extends React.Component {
  render() {
    const {
      goFullScreen,
      showLeftPanel,
      leftPanel,
      preview,
    } = this.props;
    const previewStyle = goFullScreen ? fullScreenPreviewStyle : normalPreviewStyle;

    return (
      <div style={rootStyle}>
        <div style={leftPanelStyle}>
          {showLeftPanel && leftPanel()}
        </div>
        <div style={contentPanelStyle}>
          <div style={previewStyle}>
            {preview()}
          </div>
        </div>
      </div>
    );
  }
}

LayoutMobile.propTypes = {
  showLeftPanel: React.PropTypes.bool.isRequired,
  goFullScreen: React.PropTypes.bool.isRequired,
  leftPanel: React.PropTypes.func.isRequired,
  preview: React.PropTypes.func.isRequired,
};

export default LayoutMobile;
