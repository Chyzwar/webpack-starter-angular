import 'angular-material/angular-material.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import Navbar from './navbar/navbar';

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
commonDirectives.directive('navbar', Navbar);


export default commonDirectives.name;
