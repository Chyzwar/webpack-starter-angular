import angular from 'angular';
import uiRouter from 'angular-ui-router';

import loginComponent from './login.component';

const appLogin = angular.module('app.login', [
  uiRouter,
])
.config(($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login',
    });
})
.component('login', loginComponent);


export default appLogin.name;
