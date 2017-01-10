import React from 'react';
import { features } from '../../../../libs/key_events';
import { baseFonts } from '../theme';
import svg from './svg_package';

const TRANSITION = '500ms ease 0ms';

const colorScheme = {
  bounds: '#d4d4d4',
  back: '#ebebeb',
  items: '#fcfcfc',
  text: baseFonts.color,
  iconsOpacity: 0.6,
};

const rootStyle = {
  ...baseFonts,
  fontSize: 12,
  position: 'fixed',
  zIndex: 10,
  left: 10,
  bottom: 10,
  backgroundColor: colorScheme.bounds,
  borderRadius: '4px 4px 0px 0px',
  boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.5)',
  paddingTop: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
//  transition: `height ${TRANSITION}`,
};
rootStyle.transition = `height ${TRANSITION}`; // todo: move back

// manage two separate shortcut keys for
// 'mac' & other (windows, linux) platforms
function getOptionsList(shortcutOptions, platform) {
  // is it mac platform
  const isMac = (platform && platform.indexOf('mac') !== -1);
  const keyTemplate = isMac ? ['⌘ ⇧ ', '⌃ ⇧ '] : ['Ctrl + Shift + '];
  const getKeys = (key) => keyTemplate.map(val => val.concat(key)).join(' / ');

  const OptionsList = [
    {
      name: 'Fullscreen Mode',
      keys: getKeys('F'),
      event: features.FULLSCREEN,
      value: shortcutOptions.goFullScreen,
    },
    {
      name: 'Addons Panel',
      keys: getKeys('D'),
      event: features.DOWN_PANEL,
      value: shortcutOptions.showDownPanel,
    },
    {
      name: 'Stories Panel',
      keys: getKeys('L'),
      event: features.LEFT_PANEL,
      value: shortcutOptions.showLeftPanel,
    },
    {
      name: 'Addons Panel on the right',
      keys: getKeys('J'),
      event: features.DOWN_PANEL_IN_RIGHT,
      value: shortcutOptions.downPanelInRight,
    },
    {
      name: 'Search Box',
      keys: getKeys('P'),
      event: features.SEARCH,
      value: shortcutOptions.showSearchBox,
    },
  ];
  return OptionsList;
}

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      short: false,
    };

    this.hadnleMenu = this.hadnleMenu.bind(this);
  }

  handleOption(event) {
    return () => {
      this.props.emulShortcuts(event);
    };
  }

  hadnleMenu() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  renderOptions() {
    const itemStyle = {
      cursor: 'pointer',
      userSelect: 'none',
      backgroundColor: colorScheme.items,
      margin: 4,
      marginBottom: 1,
      marginTop: 1,
      padding: 1,
      paddingRight: 8,
      paddingLeft: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };

    const iconStyle = {
      width: 18,
      opacity: colorScheme.iconsOpacity,
      marginRight: 8,
    };

    const blockStyle = {
      overflowY: 'hidden',
      backgroundColor: colorScheme.back,
//      padding: 2,
    };

    const option = (val, key) => (
        <div
          key={key}
          style={itemStyle}
          onClick={this.handleOption(val.event)}
          title={val.keys}
        >
         <img
           style={iconStyle}
           src={val.value ? svg.checked_box : svg.unchecked_box}
           alt="checked_box"
         />
         <span>{`${val.name}`}</span>
        </div>
    );


    return (
      <div style={blockStyle}>
        {<div style={{...itemStyle, height: 1}}/>}
        {getOptionsList(this.props.shortcutOptions).map(
          (val, ind) => option(val, ind)
        )}
        {<div style={{...itemStyle, height: 20}}/>}
      </div>
    );
  }

  renderNavigation() {
    const blockStyle = {
      background: colorScheme.bound,
      height: 18,
      paddingLeft: 8,
//      paddingTop: 4,
      display: 'flex',
      justifyContent: 'space-between',
    };

    const btnsStyle = {
//      background: '#c1c1c1',
      display: 'flex',
      justifyContent: 'space-between',
      width: 110,
      marginRight: 8,
    };

    const iconStyle = {
      width: 18,
      marginRight: 8,
      opacity: colorScheme.iconsOpacity,
    };

    const menuStyle = {
      width: 18,
      opacity: colorScheme.iconsOpacity,
      marginRight: 8,
      transition: `transform ${TRANSITION}`,
      transform: this.state.collapsed ? 'rotate(0.75turn)' : '',
    };

    return (
      <div>
        <div style={blockStyle}>
         <img
           style={menuStyle}
           src={svg.menu}
           alt="menu" title="toggle menu"
           onClick={this.hadnleMenu}
         />

         <div style={btnsStyle}>
           <img
             style={iconStyle}
             src={svg.fast_rewind}
             alt="previous" title="previous story group"
           />
           <img
             style={iconStyle}
             src={svg.skip_previous}
             alt="previous" title="previous story"
             onClick={this.handleOption(features.PREV_STORY)}
           />
           <img
             style={iconStyle}
             src={svg.skip_next}
             alt="next" title="next story"
             onClick={this.handleOption(features.NEXT_STORY)}
           />
           <img
             style={iconStyle}
             src={svg.fast_forward}
             alt="next" title="next story group"
           />
         </div>
        </div>
      </div>
    );
  }

  render() {
    const blockStyle = {
      ...rootStyle,
      height: this.state.collapsed ? 18 : 132,
    };

    return (
      <div style={blockStyle}>
        {/* <p>{this.props.selectedKind}{'/'}{this.props.selectedStory}</p>*/}
        {this.renderOptions()}
        {this.renderNavigation()}
      </div>
    );
  }
}

FloatingMenu.propTypes = {
  selectedKind: React.PropTypes.string,
  selectedStory: React.PropTypes.string,
  shortcutOptions: React.PropTypes.object,
  emulShortcuts: React.PropTypes.func,
};

export default FloatingMenu;
