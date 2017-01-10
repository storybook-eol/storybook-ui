import React from 'react';
import Header from './header';
import Footer from './footer';
import Stories from './stories';
import TextFilter from './text_filter';
import pick from 'lodash.pick';

const scrollStyle = {
//  height: 'calc(100vh - 105px)',
  flexGrow: 1,
  marginTop: 10,
  marginLeft: 10,
  overflowY: 'auto',
};

const mainStyle = {
//  padding: '10px 0 10px 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
};

const storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

const LeftPanel = (props) => (
  <div style={mainStyle}>
    <div style={{ padding: 10, paddingRight: 0 }}>
      <Header
        name={props.name}
        url={props.url}
        openShortcutsHelp={props.openShortcutsHelp}
      />
      <TextFilter
        text={props.storyFilter}
        onClear={() => props.onStoryFilter('')}
        onChange={(text) => props.onStoryFilter(text)}
      />
    </div>
    <div style={scrollStyle}>
      {props.stories ? (<Stories {...pick(props, storyProps)} />) : null}
    </div>
    <Footer>
      {props.floatingMenu()}
    </Footer>

  </div>
);

LeftPanel.propTypes = {
  stories: React.PropTypes.array,
  selectedKind: React.PropTypes.string,
  selectedStory: React.PropTypes.string,
  onSelectStory: React.PropTypes.func,

  storyFilter: React.PropTypes.string,
  onStoryFilter: React.PropTypes.func,

  openShortcutsHelp: React.PropTypes.func,
  name: React.PropTypes.string,
  url: React.PropTypes.string,

  floatingMenu: React.PropTypes.func,
};

export default LeftPanel;
