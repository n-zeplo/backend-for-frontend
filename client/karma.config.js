const webpackConfig = require('./webpack-dev.config');

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
      isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
          presets: ['react', 'es2015']
        }
      },
      module: {
        loaders: [
          {
            test: /\.jsx?/,
            exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          {
           test: /\.jsx?/,
           exclude: /\/node_modules\/|\/tests\//,
           loader: 'isparta'
          },
          {
            test: /\.scss$/,
            loaders: [
              'style?sourceMap',
              'css?modules&importLoaders=1&localIdentName=[name]__[local]',
              'resolve-url',
              'sass?sourceMap'
            ]
          }
        ]
      },
      resolve: webpackConfig.resolve,
      externals: {
        /* following explained by: https://github.com/airbnb/enzyme/issues/47 */
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'react/lib/ReactContext': true,
        'text-encoding': 'window'
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    coverageReporter: {
      check: {
        global: {
           statements: 90,
           lines: 90,
           functions: 90,
           branches: 90
        }
     }
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    concurrency: Infinity
  });
};
