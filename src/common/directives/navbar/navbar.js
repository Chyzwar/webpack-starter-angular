import navbar from './navbar.html';
import NavbarCtrl from './NavbarCtrl';

function navbarDirective() {
  return {
    restrict: 'E',
    scope: {},
    template: navbar,
    controller: NavbarCtrl,
    controllerAs: 'dnc',
    bindToController: true,
  };
}

export default navbarDirective;
