import 'angular-material/angular-material.css'
import './styles.scss';

import angular from 'angular';

import uiRouter from 'angular-ui-router';
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
