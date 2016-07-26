import angular from 'angular';
import uiRouter from 'angular-ui-router';

import resetComponent from './reset.component';

const resetModule = angular.module('app.reset', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('reset', {
      url: '/reset',
      template: '<reset></reset>',
    });
})
.component('reset', resetComponent);


export default resetModule.name;
