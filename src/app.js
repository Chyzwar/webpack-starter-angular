import 'angular-material/angular-material.css';
import 'angular-ui-grid/ui-grid.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';

import AppComponent from './app.component';
import Common from './common/common';
import Components from './components/components';
console.log(ngMaterial);
angular.module('ng-app', [
  ngAnimate,
  ngAria,
  ngMaterial,

  uiRouter,
  'ui.grid', //https://github.com/angular-ui/ui-grid/issues/5558

  Common.name,
  Components.name
])
.directive('app', AppComponent)

/**
 * App configuaration,
 */
.config(function( $mdThemingProvider) {
  /**
   * Configuration for ngMaterial
   */
   $mdThemingProvider.theme('default');

    // .primaryPalette('blue')
    // .accentPalette('green')
    // .warnPalette('yellow');


});
