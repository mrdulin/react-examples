module.exports = {
  path: 'get-url-query-parameters(/:paramA)',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const component = require('./main');
      cb(null, {content: component});
    }, 'GetUrlQueryParameters');
  }
}
