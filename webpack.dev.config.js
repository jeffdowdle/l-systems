const baseConfig = require('./webpack.base.config');

const extendedConfig = {
  devtool: 'source-map',
  devServer: {
    port: 8080,
  },
};

module.exports = Object.assign({}, baseConfig, extendedConfig);
