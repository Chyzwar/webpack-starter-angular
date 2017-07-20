
declare var NODE_ENV: String;

declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

/**
 * Add typings for stack trace limit, V8 only
 */
interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}
interface ErrorConstructor extends ErrorStackTraceLimit {}
