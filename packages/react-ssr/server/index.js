const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const config = {
  assets: {
    image: {
      extensions: ['png']
    }
  }
};

new WebpackIsomorphicTools(config)
  .server(__dirname, () => {
    console.log(require('./css-selector.png'));
  });


