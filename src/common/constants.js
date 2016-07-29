import angular from 'angular';

/**
 * Function that set URLs based on env
 * @return {Object}
 */
function appUrls() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        api: 'http://localhost:6000',
        base: 'http://localhost:3000',
      };
    case 'production':
      return {
        api: 'api.example.com',
        base: 'example.com',
      };
    default:
      throw new Error('process.env.NODE_ENV is not set by webpack DefinePlugin');
  }
}


const urls = appUrls();

/**
 * appConstants module will be a collection of application wide constants
 * These will get injected to top level app module and common modules as needed
 * @type {Module}
 */
const appConstants = angular.module('app.constants', []);

appConstants.constant('BASE_URL', urls.base);
appConstants.constant('API_URL', urls.api);
appConstants.constant('PASSWORD_POLICY',
  {
    regex: '',
  });


export default appConstants.name;

