
declare var NODE_ENV: String;
declare const require: Function;

/**
 * Add typings for stack trace limit, V8 only
 */
interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}
interface ErrorConstructor extends ErrorStackTraceLimit {}
