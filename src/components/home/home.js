import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const homeModule = angular.module('app.home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
    });
})

.component('home', homeComponent);

export default homeModule.name;
