import angular from 'angular';
import appConstants from '../constant';

import Auth from './auth/auth';
import User from './user/user';

/**
 * appServices module will be a collection of reusable services
 * @type {Module}
 */
const appServices = angular.module('appServices', [
  appConstants,
]);

/**
 * Register Serivices in module
 */
appServices.service('Auth', Auth);
appServices.service('User', User);


export default appServices.name;
