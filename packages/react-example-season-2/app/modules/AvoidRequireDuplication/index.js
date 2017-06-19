module.exports = {
  path: 'avoid-require-duplication',
  getComponents(nextState, cb) {
    require.ensure([], require => {
      const main = require('./main');
      cb(null, { content: main });
    }, 'AvoidRequireDuplication')
  }
}
