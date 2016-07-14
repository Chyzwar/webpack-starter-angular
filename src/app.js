import 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';


angular.module('myApp', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent);
