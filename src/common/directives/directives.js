import 'angular-material/angular-material.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import sideNavbar from './side-navbar/sideNavbar';
import topNavbar from './top-navbar/topNavbar';
import userAvatar from './user-avatar/userAvatar';

/**
 * Initialise module with dependancies
 * @type {Module}
 */
const commonDirectives = angular.module('common.directives', [
  ngAnimate,
  ngAria,
  ngMaterial,
])
.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default');
});

/**
 * Register directives in module
 */
commonDirectives.directive('sideNavbar', sideNavbar);
// commonDirectives.directive('topNavbar', topNavbar);
commonDirectives.directive('userAvatar', userAvatar)

export default commonDirectives.name;
