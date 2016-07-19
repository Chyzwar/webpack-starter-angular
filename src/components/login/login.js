import angular from 'angular';
import uiRouter from 'angular-ui-router';

import loginComponent from './login.component';

const loginModule = angular.module('app.login', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
    });
})
.component('login', loginComponent);


export default loginModule;
