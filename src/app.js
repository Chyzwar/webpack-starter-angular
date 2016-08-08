import angular from 'angular';
import appCommon from './common/common';
import appComponents from './components/components';

/**
 * Top level, application module initalisation
 */
angular.module('ng-app', [
  appCommon,
  appComponents,
]);
