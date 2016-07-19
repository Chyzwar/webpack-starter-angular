import angular from 'angular';

import Navbar from './navbar/navbar';

const appDirectives = angular.module('appDirectives', [
  Navbar.name,
]);

export default appDirectives;
