import template from './login.html';
import controller from './login.controller';

let newComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default newComponent;
