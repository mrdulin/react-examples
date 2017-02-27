function EnvReporterPlugin(options) {
    if(typeof options !== 'string') throw new TypeError('EnvReporterPlugin options must be a string.');
    this.info = options;
}

EnvReporterPlugin.prototype.apply = function(compiler) {
    var _this = this;
    compiler.plugin('compile', function(params) {
        var NODE_ENV = process.env.NODE_ENV || '';
        var env = NODE_ENV.toLowerCase() === 'production' ? 'production' : 'development';
        var info = _this.info || 'WEBPACK NODE_ENV :: ';

        console.log('========================================================');
        console.log(info, JSON.stringify(env));
        console.log('========================================================');
        console.log('\n\n');

    });
};

module.exports = EnvReporterPlugin;