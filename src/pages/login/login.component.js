import './login.scss';

import template from './login.html';
import controller from './login.controller';

const loginComponent = {
  template,
  controller,

  controllerAs: 'lc',
  bindToController: true,
};

export default loginComponent;
