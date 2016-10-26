const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.dev.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],

  devtools: ['source-map', 'eval'],
  devServer: {
    colors: true,
    historyApiFallback: {
      index: '/src/'
    },
    inline: true,
    port: 3000,
    hot: true
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', '.js', 'jsx', '.spec.js', '.spec.js']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015'],
        'plugins': ['transform-react-jsx']
      },

      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'resolve-url',
        'sass?sourceMap'
      ]
    }]
  }
};
