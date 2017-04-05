import React from 'react';
import Header from '../left_panel/header';
import Stories from '../left_panel/stories';
import TextFilter from '../left_panel/text_filter';
import pick from 'lodash.pick';
import isString from 'lodash.isstring';

import Collapsible from '../collapsible';

const mainStyle = {
  padding: '10px',
};

const storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

const MenuMobile = (props) => (
  <div style={mainStyle}>
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
    <Collapsible
      isVisible={props.isMobile}
      isActive={isString(props.storyFilter)}
      title="component list"
    >
      {props.stories ? (<Stories {...pick(props, storyProps)} />) : null}
    </Collapsible>
  </div>
);

MenuMobile.propTypes = {
  stories: React.PropTypes.array,
  selectedKind: React.PropTypes.string,
  selectedStory: React.PropTypes.string,
  onSelectStory: React.PropTypes.func,

  storyFilter: React.PropTypes.string,
  onStoryFilter: React.PropTypes.func,

  openShortcutsHelp: React.PropTypes.func,
  name: React.PropTypes.string,
  url: React.PropTypes.string,

  isMobile: React.PropTypes.string,
};

export default MenuMobile;
