import 'angular-material/angular-material.css';
import 'angular-ui-grid/ui-grid.css';

import moment from 'moment';
import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMoment from 'angular-moment';

import uiRouter from 'angular-ui-router';
import uiGrid from 'angular-ui-grid';

import AppComponent from './app.component';
import appCommon from './common/common';
import appComponents from './components/components';

/**
 * Top level, application module initalisation
 */
angular.module('ng-app', [
  ngAnimate,
  ngAria,
  ngMaterial,
  ngMoment.name,

  uiRouter,
  'ui.grid', //https://github.com/angular-ui/ui-grid/issues/5558

  appCommon,
  appComponents,
])
.component('app', AppComponent)

/**
 * App configuaration,
 */
.config(function( $mdThemingProvider) {
  /**
   * Configuration for ngMaterial
   */
   $mdThemingProvider.theme('default');
});
