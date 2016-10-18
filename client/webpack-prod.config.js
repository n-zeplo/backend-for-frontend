'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],

  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', '.js', 'jsx', '.spec.js', '.spec.js'],
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        'presets': ['es2015'],
        'plugins': ['transform-react-jsx']
      },
      include: path.join(__dirname, 'src')
    }],
  }
};
