// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src'; // the app root folder
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_root: app_root, // the app root folder, needed by the other webpack configs
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?https://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.json$/, 
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
  /*
    C9 specific devServer config
  */
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './public',
  //   host: process.env.IP,
  //   port: process.env.PORT,
  //   "public": "coinsquare-take-home-daniil.c9users.io"
  // },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
};
