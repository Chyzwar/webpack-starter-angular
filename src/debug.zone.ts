/**
 * Add addition zone modules for better stack traces
 */
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';

/**
 * Error stack trace limit increased (zone suck)
 */
Error.stackTraceLimit = Infinity;
