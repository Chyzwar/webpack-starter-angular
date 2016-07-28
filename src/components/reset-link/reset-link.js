import '../reset/reset.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import resetLinkComponent from './reset-link.component';

const appResetLink = angular.module('app.resetLink', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('reset.validate', {
      url: '/reset-link',
      params: {
        user: null,
        code: null,
      },
      component: 'reset-link',
    });
})
.component('reset-link', resetLinkComponent);


export default appResetLink.name;
