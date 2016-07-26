import angular from 'angular';

/**
 * Function that set base URL based on env
 * @return {String}
 */
function appUrls() {
  switch (NODE_ENV) {
    case 'development':
      return {
        api: 'localhost:6000',
        base: 'localhost:6000',
      };
    case 'production':
      return {
        api: 'api.example.com',
        base: 'example.com',
      };
    default:
      throw new Error('NODE_ENV is not set by webpack DefinePlugin');
  }
}

const urls = appUrls();

/**
 * appConstants module will be a collection of application wide constants
 * These will get injected to top level app module and comon modules as needed
 * @type {Module}
 */
const appConstants = angular.module('appConstants', []);

appConstants.constants('BASE_URL', urls.base);
appConstants.constants('API_URL', urls.api);

export default appConstants.name;

