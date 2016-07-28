import angular from 'angular';
import uiRouter from 'angular-ui-router';

import resetComponent from './reset.component';

const appReset = angular.module('app.reset', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('reset', {
      url: '/reset',
      component: 'reset',
    });
})
.component('reset', resetComponent);

export default appReset.name;
