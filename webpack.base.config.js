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

      // normalize.css, gets included before all other styles
      {
        include: path.resolve(__dirname, './node_modules/normalize.css/normalize.css'),
        use: [
          'style-loader',
          'css-loader',
        ],
      },

      // CSS Modules
      {
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
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
