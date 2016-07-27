import './reset.scss';

import template from './reset-link.html';
import controller from './reset-link.controller';

const resetLinkComponent = {
  template,
  controller,

  controllerAs: 'rlc',
  bindToController: true,
};

export default resetLinkComponent;
