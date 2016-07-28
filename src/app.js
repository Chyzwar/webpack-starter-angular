import 'angular-material/angular-material.css';

import angular from 'angular';
import moment from 'moment';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMoment from 'angular-moment';
import uiRouter from 'angular-ui-router';

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

  appCommon,
  appComponents,
])
.component('app', AppComponent)

/**
 * App configuaration,
 */
.config(($mdThemingProvider) => {
  /**
   * Configuration for ngMaterial
   */
  $mdThemingProvider.theme('default');
});
