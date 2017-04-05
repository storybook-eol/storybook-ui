import React from 'react';
import Header from './header';
import Stories from './stories';
import TextFilter from './text_filter';
import pick from 'lodash.pick';
import isString from 'lodash.isstring';
import Media from 'react-media';

import Collapsible from '../collapsible';

const scrollStyle = {
  height: 'calc(100vh - 105px)',
  overflow: 'auto',
};

const mobileScrollStyle = {
  maxHeight: 'calc(100vw + 100px)',
  overflow: 'auto',
};

/* eslint-disable react/prop-types */
const HeaderAndFilter = (props) => (
  <div>
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
);
/* eslint-enable react/prop-types */

const storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

const LeftPanel = (props) => (
  <Media query="(max-width: 768px)">
    {matches => {
      return matches ? (
        <div style={{ padding: '10px' }}>
          <HeaderAndFilter {...props} />
          <Collapsible
            isActive={isString(props.storyFilter)}
            title="component list"
          >
            {props.stories &&
              <div style={mobileScrollStyle}>
                <Stories {...pick(props, storyProps)} />
              </div>
            }
          </Collapsible>
        </div>
      ) : (
        <div style={{ padding: '10px 0 10px 10px' }}>
          <HeaderAndFilter {...props} />
          <div style={scrollStyle}>
            { props.stories ? (<Stories {...pick(props, storyProps)} />) : null }
          </div>
        </div>
      );
    }}
  </Media>
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
};

export default LeftPanel;
