/** Polyfills IE9, IE10 and IE11 **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/** Polyfills for modern browsers **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/** Angular dependencies **/
import 'zone.js/dist/zone';
import 'hammerjs';

// if(NODE_ENV === 'development'){
//   import 'zone.js/dist/zone';
//   import 'zone.js/dist/long-stack-trace-zone';
//   import 'zone.js/dist/proxy';
//   import 'zone.js/dist/sync-test';
//   import 'zone.js/dist/jasmine-patch';
//   import 'zone.js/dist/async-test';
//   import 'zone.js/dist/fake-async-test';
// }
