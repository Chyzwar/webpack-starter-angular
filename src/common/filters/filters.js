import angular from 'angular';

import userRole from './userRole';
import userName from './userName';

const commonFilters = angular.module('common.filters', []);

commonFilters.filter('userRole', userRole);
commonFilters.filter('userName', userName);

export default commonFilters.name;
