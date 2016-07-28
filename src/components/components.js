import angular from 'angular';

import appHome from './home/home';
import appLogin from './login/login';
import appReset from './reset/reset';
import appResetLink from './reset-link/reset-link';

const appComponents = angular.module('app.components', [
  appHome,
  appLogin,
  appReset,
  appResetLink,
]);

export default appComponents.name;
