const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: DIST_PATH,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, './src'),
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
        test: /\.css$/,
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
  ],
};
