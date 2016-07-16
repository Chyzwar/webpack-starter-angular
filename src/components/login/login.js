import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newComponent from './login.component';

let newModule = angular.module('new', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('new', {
      url: '/new',
      template: '<new></new>'
    });
})

.component('new', newComponent);

export default newModule;
