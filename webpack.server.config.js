const path = require('path');
const webpack = require('webpack');

const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  stats: {
    children: false,
  },
  target: 'node',
  entry: './server/index.js',
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'server.js',
  },
  module: {
    rules: [

      // normalize.css and global.scss, gets included before all other styles
      {
        include: [
          path.resolve(__dirname, './node_modules/normalize.css/normalize.css'),
          path.resolve(__dirname, './src/styles/global.scss'),
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      // CSS Modules
      {
        include: path.resolve(__dirname, './src'),
        exclude: path.resolve(__dirname, './src/styles/global.scss'),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ],
};
