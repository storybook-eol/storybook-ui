import React from 'react';
import FloatingMenu from '../../containers/floating_menu';
import { colorScheme, floating } from '../theme';
import { boxPositions } from '../../../../libs/menu_positions';

const rootStyle = {
  position: 'absolute',

  backgroundColor: colorScheme.block,
  borderRadius: 2,
  paddingBottom: 2,
  ...floating,
};

function getPosition(pos) {
  switch (pos) {
    case boxPositions.BOTTOM_RIGHT:
      return {
        right: 10,
        bottom: 20,
      };
    case boxPositions.TOP_LEFT:
      return {
        left: 10,
        top: 20,
      };
    case boxPositions.TOP_RIGHT:
      return {
        right: 10,
        top: 20,
      };
    default:
      return {
        left: 10,
        bottom: 20,
      };
  }
}

const FloatingBlock = ({ position }) => (
  <div style={{ ...rootStyle, ...getPosition(position) }}>
    <FloatingMenu
      downDirection={position === (boxPositions.TOP_LEFT || boxPositions.TOP_RIGHT)}
    />
  </div>
);

FloatingBlock.propTypes = {
  position: React.PropTypes.string,
};

export default FloatingBlock;
