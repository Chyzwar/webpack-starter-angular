import angular from 'angular';

import appDirectives from './directives/directives';
import appServices from './services/services';
import appFilters from './filters/filters';

/**
 * Common functionality across app.
 * @type {Module}
 */
const appCommons = angular.module('appCommon', [
  appDirectives,
  appServices,
  appFilters,
]);

export default appCommons.name;
