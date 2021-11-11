module.exports = function(env: string): any {
  return require(`./webpack.${env}.ts`);
}
