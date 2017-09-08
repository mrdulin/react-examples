var args = process.argv;

function EnvReporterPlugin(options) {
  if (typeof options !== 'string') throw new TypeError('EnvReporterPlugin options must be a string.');
  this.info = options;
}

EnvReporterPlugin.prototype.apply = function (compiler) {
  var _this = this;

  compiler.plugin('compile', function (params) {
    var NODE_ENV = process.env.NODE_ENV || '';
    var env = NODE_ENV.toLowerCase() === 'production' ? 'production' : 'development';
    var info = _this.info || 'WEBPACK NODE_ENV :: ';

    //判断webpack cli是否有--json选项， 如果有，则不输出环境变量，因为可能要生成正确的stats.json文件用于webpack analyse tool
    if (args.indexOf('--json') === -1) {
      console.log('========================================================');
      console.log(info, JSON.stringify(env));
      console.log('========================================================');
      console.log('\n\n');
    }
  });
};

module.exports = EnvReporterPlugin;
