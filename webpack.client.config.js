const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'build/dist');

module.exports = {
  stats: {
    children: false,
  },
  entry: './src/index.js',
  output: {
    path: DIST_PATH,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [

      // normalize.css and global.scss, gets included before all other styles
      {
        include: [
          path.resolve(__dirname, './node_modules/normalize.css/normalize.css'),
          path.resolve(__dirname, './src/styles/global.scss'),
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },

      // CSS Modules
      {
        include: path.resolve(__dirname, './src'),
        exclude: path.resolve(__dirname, './src/styles/global.scss'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoader: 1,
                modules: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/styles/resources/index.scss'],
              },
            },
          ],
        }),
        test: /\.(css|scss)$/,
      },

      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ],
};
