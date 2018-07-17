var webpackConfig = require("./webpack.test.js");

module.exports = function(config) {
  var _config = {
    basePath: "../",

    frameworks: ["jasmine", "karma-typescript"],

    files: [
      {
        pattern: "./test-config/karma-test-shim.js",
        watched: true
      },
      {
        pattern: "./src/assets/**/*",
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      {
        pattern: "src/**/*.ts"
      }
    ],

    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },

    proxies: {
      "/assets/": "/base/src/assets/"
    },

    preprocessors: {
      "./test-config/karma-test-shim.js": ["sourcemap", "webpack"]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: "errors-only"
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: "log",
      format: "%b %T: %m",
      terminal: true
    },

    coverageIstanbulReporter: {
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true
    },

    reporters: config.coverage
      ? ["kjhtml", "dots", "coverage-istanbul", "karma-typescript"]
      : ["kjhtml", "dots", "karma-typescript"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "ChromeHeadless"],
    singleRun: false
  };

  config.set(_config);
};
