declare module 'react/lib/update' {
  function update<S>(value: S, spec: any): S;

  // 对于module.exports导出的方法，需要使用export = xxx定义，引入的时候使用import xxx = require(moduleName);
  // https://github.com/Microsoft/TypeScript/issues/7554
  export = update;
}
