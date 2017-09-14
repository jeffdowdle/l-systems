const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.client.config');

const devConfig = Object.assign({}, baseConfig);

devConfig.devtool = 'source-map';

devConfig.devServer = {
  port: 8080,
  stats: {
    children: false,
  },
};

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/index.ejs',
});

devConfig.plugins.push(htmlPlugin);

module.exports = devConfig;
