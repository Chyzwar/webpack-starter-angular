import angular from 'angular';
import appConstants from '../constants';

import Auth from './auth/auth';
import User from './user/user';
import Password from './password/Password';

/**
 * commonServices module will be a collection of reusable services
 * @type {Module}
 */
const commonServices = angular.module('common.services', [
  appConstants,
]);

/**
 * Register Serivices in module
 */
commonServices.service('Auth', Auth);
commonServices.service('User', User);
commonServices.service('Password', Password);


export default commonServices.name;
