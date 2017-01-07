import React from 'react';

import VSplit from './vsplit';
import HSplit from './hsplit';
import SplitPane from '@kadira/react-split-pane';

const rootStyle = {
  height: '100vh',
  backgroundColor: '#F7F7F7',
};

const leftPanelStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const downPanelStyle = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: '0px 10px 10px 0',
  boxSizing: 'border-box',
};

const contentPanelStyle = {
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '10px 10px 10px 0',
};

const normalPreviewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF',
  border: '1px solid #ECECEC',
  borderRadius: 4,
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


const vsplit = <VSplit />;
const hsplit = <HSplit />;

const onDragStart = function () {
  document.body.classList.add('dragging');
};

const onDragEnd = function () {
  document.body.classList.remove('dragging');
};

class Layout extends React.Component {
  renderRightPanel() {
    const {
      goFullScreen,
      downPanel, showDownPanel, downPanelInRight,
      preview,
    } = this.props;

    const previewStyle = goFullScreen
      ? fullScreenPreviewStyle
      : normalPreviewStyle;

    const contentPanel = (
      <div style={contentPanelStyle}>
        <div style={previewStyle}>
          {preview()}
        </div>
      </div>
    );

    if (!showDownPanel) {
      return contentPanel;
    }

    const downPanelDefaultSize = downPanelInRight ? 400 : 200;

    return (
      <SplitPane
        split={downPanelInRight ? 'vertical' : 'horizontal'}
        primary="second"
        minSize={downPanelInRight ? 200 : 100}
        defaultSize={downPanelDefaultSize}
        resizerChildren={downPanelInRight ? vsplit : hsplit}
        onDragStarted={onDragStart}
        onDragFinished={onDragEnd}
      >
        {contentPanel}
        <div style={downPanelStyle}>
          {downPanel()}
        </div>
      </SplitPane>
    );
  }

  render() {
    const {
      leftPanel, showLeftPanel,
    } = this.props;

    const rightPanel = this.renderRightPanel();

    const leftPanelDefaultSize = 250;

    return (
      <div style={rootStyle}>
        {
          showLeftPanel
            ? (
              <SplitPane
                key="main-split-pane"
                split="vertical"
                minSize={leftPanelDefaultSize}
                defaultSize={leftPanelDefaultSize}
                resizerChildren={vsplit}
                onDragStarted={onDragStart}
                onDragFinished={onDragEnd}
              >
                <div style={leftPanelStyle}>
                  {leftPanel()}
                </div>

                {rightPanel}
              </SplitPane>
            )
            : rightPanel
        }
      </div>
    );
  }
}

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
