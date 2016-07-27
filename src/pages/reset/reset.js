import angular from 'angular';
import uiRouter from 'angular-ui-router';

import resetComponent from './reset.component';
import resetLinkComponent from './reset-link.component';

const resetModule = angular.module('app.reset', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('reset', {
      url: '/reset',
      component: 'reset',
    })
    .state('reset.validate', {
      url: '/reset-link',
      params: {
        user: null,
        code: null,
      },
      component: 'reset-link',
    });
})
.component('reset', resetComponent)
.component('reset-link', resetLinkComponent);

export default resetModule.name;
