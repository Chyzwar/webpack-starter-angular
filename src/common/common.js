import angular from 'angular';

import appDirectives from './directives/directives';
import appModules from './modules/modules';
import appServices from './services/services';
import appFilters from './filters/filters';
import appConstants from './constant';

/**
 * Common functionality across app.
 * @type {Module}
 */
const appCommons = angular.module('app.commons', [
  appDirectives,
  appModules,
  appServices,
  appFilters,
  appConstants,
]);

export default appCommons.name;
