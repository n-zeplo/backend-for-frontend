## Requirements

* [npm >= v3.10.9](https://www.npmjs.com/)
* [node >= v4.23 ](https://www.node.js)

## Getting started with Client codebase

1. Ensure you are within the client directory

 ```
  $ cd client/
  ```

2. Run npm install:

  ```
  $ npm install
  ```

## Development

### Run A Dev Server

Our dev server allows developers to see changes to the codebase (on save) automatically represented in the browser without a loss of application state. This is accomplished using webpack-dev-server and hot-reload and will enable for a better and faster dev experience. The settings and options for this server can be found in `webpack-dev.config.js`.

Run a dev server using command:

```
  $ npm run dev
```

### Build Application

When building the application the code is linted and transpiled into a `dist/` folder. The settings and options for the build process can be found in `webpack-prod.config.js`.

To build the application for deployment run:

```
  $ npm run build
```
### Package Application

The application builds and packages the `dist/` folder into a `.tar` file in the root directory. This will initially serve as the artifact in our CI.

To package the application use command:
```
  $ npm run package
```

## Linters

We are using linting to maintain code quality and ensure standardization of coding patterns for all devs across the team.

To run all linters use task `$ npm run lint`

### JavaScript Linting

ESlint rules defined in `.eslintrc`

Run JS linter using npm: `$ npm run eslint`

### SASS Linting

SASS Lint rules defined in: `.stylelintrc`

Run SASS lint using npm: `$ npm run stylelint`

## Javascript Testing

### Technology Choices
* [Karma](https://karma-runner.github.io/1.0/index.html) as our test runner
* [Mocha](https://mochajs.org/) as our test framework
* [Chai](http://chaijs.com/) as our assertion library
* [Sinon](http://sinonjs.org/) as our mocking / spying library
* [Enzyme](hhtps://github.com/airbnb/enzyme) as a testing utility for React.js
* [PhantomJS](http://phantomjs.org/) for our headless browser
* [Istanbul]() for test coverage

All code should be covered by tests and we will be using istanbul to establish test coverage.

### Test Structure

Test directory structure should mimick the structure of the JS file directory. There should be one `*.spec.js(x)` file for every `*.js(x)` file for each piece of functionality.

### Running Tests

Tests can be run using the command:

1. Run using npm scripts: `$ npm test`

### Code Coverage

Code coverage is using karma-coverage and isparta to create and capture coverage for all tests. Testing will fail if code coverage falls below 90% covered. For more detailed coverage information please refer to the `coverage/` folder.