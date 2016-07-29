import angular from 'angular';

import directives from './directives/directives';
import modules from './modules/modules';
import services from './services/services';
import filters from './filters/filters';
import constants from './constants';

/**
 * Common functionality across app.
 * @type {Module}
 */
const common = angular.module('common', [
  directives,
  modules,
  services,
  filters,
  constants,
]);

export default common.name;
