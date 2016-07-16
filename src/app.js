import 'angular-material/angular-material.css'

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import Common from './common/common';
import Components from './components/components';


angular.module('ng-app', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial,

  Common.name,
  Components.name
])
.directive('app', AppComponent)

/**
 * App configuaration,
 */
.config( function( $mdThemingProvider, $provide ) {
  /**
   * Configuration for ngMaterial
   */
   $mdThemingProvider.theme('myTheme')
    .primaryPalette('blue')
    .accentPalette('green')
    .warnPalette('yellow');
   $mdThemingProvider.generateThemesOnDemand(true);
   $provide.value('themingProvider', $mdThemingProvider);
});
