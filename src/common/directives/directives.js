import angular from 'angular';

import Navbar from './navbar/navbar';

const appDirectives = angular.module('appDirectives', [
  Navbar,
]);

export default appDirectives.name;
