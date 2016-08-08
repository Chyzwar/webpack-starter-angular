import 'angular-material/angular-material.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import sideNavbar from './side-navbar/sideNavbar';

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


export default commonDirectives.name;
