import 'angular-material/angular-material.css'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';


angular.module('myApp', [
  uiRouter,
  ngMaterial,
  Common.name,
  Components.name
])
.directive('app', AppComponent);
