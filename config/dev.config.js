var path = require('path');
var webpack = require('webpack');

var jsEntryPath = path.resolve(__dirname, '..', 'lib', 'index.js');
var htmlEntryPath = path.resolve(__dirname, '..', 'lib', 'index.html');
var buildPath = path.resolve(__dirname, '..', 'public', 'build');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    jsEntryPath,
    htmlEntryPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
