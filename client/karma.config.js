var webpackConfig = require('./webpack-dev.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'tests/**/*.spec.js',
      'tests/**/*.spec.jsx'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack'],
      'tests/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      resolve: webpackConfig.resolve,
      externals: {
        /* following explained by: https://github.com/airbnb/enzyme/issues/47 */
        "jsdom": "window",
        "cheerio": "window",
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': true,
        'text-encoding': 'window'
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    concurrency: Infinity
  })
};
