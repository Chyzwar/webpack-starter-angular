import angular from 'angular';

import Home from './home/home';
import Login from './login/login';
import Reset from './reset/reset';

const appPages = angular.module('appPages', [
  Home,
  Login,
  Reset,
]);

export default appPages.name;
