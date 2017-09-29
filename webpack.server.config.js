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
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      renderers: path.resolve(__dirname, 'src/renderers/'),
      form: path.resolve(__dirname, 'src/form/'),
    },
  },
  module: {
    rules: [

      // normalize.css and global.scss, gets included before all other styles
      {
        include: [
          path.resolve(__dirname, './node_modules/normalize.css/normalize.css'),
          path.resolve(__dirname, './src/styles/global.scss'),
        ],
        use: 'null-loader',
      },

      // CSS Modules
      {
        include: path.resolve(__dirname, './src'),
        exclude: path.resolve(__dirname, './src/styles/global.scss'),
        use: 'null-loader',
        test: /\.(css|scss)$/,
      },

      // Javascript
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /\.worker\.js$/
        ],
        use: [
          'babel-loader',
        ],
      },

      // Javascript
      {
        test: /\.worker\.js$/,
        exclude: /node_modules/,
        use: [
          'null-loader',
        ],
      },

    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};
