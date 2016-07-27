import angular from 'angular';
import appConstants from '../constant';

import Auth from './auth/auth';
import User from './user/user';
import Password from './password/Password';

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
appServices.service('Password', Password);


export default appServices.name;
