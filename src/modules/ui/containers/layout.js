import pick from 'lodash.pick';
import Layout from '../components/layout';
import genPoddaLoader from '../libs/gen_podda_loader';
import compose from '../../../compose';

export const mapper = ({ shortcutOptions, floatingBoxOptions }) => {
  return {
    ...pick(shortcutOptions,
      'showLeftPanel',
      'showDownPanel',
      'goFullScreen',
      'downPanelInRight'
    ),
    ...pick(floatingBoxOptions,
      'showFloatingBox',
      'floatingBoxPosition'
    ),
  };
};

export default compose(genPoddaLoader(mapper))(Layout);
