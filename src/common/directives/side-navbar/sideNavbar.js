import './side-navbar.scss';

import sideNavbar from './side-navbar.html';
import SideNavbarCtrl from './SideNavbarCtrl';

function sideNavbarDirective() {
  return {
    restrict: 'E',
    scope: {},
    template: sideNavbar,
    controller: SideNavbarCtrl,
    controllerAs: 'snc',
    bindToController: true,
  };
}

export default sideNavbarDirective;

