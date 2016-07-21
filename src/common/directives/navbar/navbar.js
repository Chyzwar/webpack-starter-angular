import template from './navbar.html';
import controller from './navbar.controller';

const navbarDirective = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: "$ctrl",
    bindToController: true
  };
};

export default navbarDirective;
