import angular from 'angular';

import Home from './home/home';
import Login from './login/login';
import Reset from './reset/reset';

const appComponents = angular.module('appComponents', [
  Home.name,
  Login.name,
  Reset.name,
]);

export default appComponents.name;
