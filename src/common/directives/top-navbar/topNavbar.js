import './top-navbar.scss';

import topNavbar from './top-navbar.html';
import TopNavbarCtrl from './TopNavbarCtrl';

function topNavbarDirective() {
  return {
    restrict: 'E',
    scope: {},
    template: topNavbar,
    controller: TopNavbarCtrl,
    controllerAs: 'snc',
    bindToController: true,
  };
}

export default topNavbarDirective;

