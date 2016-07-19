import angular from 'angular';

import Home from './home/home';
import Login from './login/login';

const appComponents = angular.module('appComponents', [
  Home.name,
  Login.name
]);


export default appComponents.name;
