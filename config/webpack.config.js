/**
 * Override the Ionic build settings
 */
const path = require("path");
const defaultConfig = require("@ionic/app-scripts/config/webpack.config.js");
const AutoDllPlugin = require("autodll-webpack-plugin");

const env = process.env.IONIC_ENV;

const devDependencies = [
  "karma",
  "karma-chrome-launcher",
  "karma-coverage-istanbul-reporter",
  "karma-jasmine",
  "karma-jasmine-html-reporter",
  "karma-sourcemap-loader",
  "karma-webpack",
  "@angular/cli",
  "@ionic/app-scripts",
  "@types/chai",
  "@types/jasmine",
  "@types/node",
  "@types/sinon",
  "@types/sinon-chai",
  "angular2-template-loader",
  "chai",
  "html-loader",
  "husky",
  "ineeda",
  "istanbul-instrumenter-loader",
  "jasmine",
  "jasmine-spec-reporter",
  "null-loader",
  "prettier",
  "pretty-quick",
  "protractor",
  "sinon",
  "sinon-chai",
  "ts-loader",
  "ts-node",
  "typescript"
];

//Packages for ionic
const ionicDepdencies = [
  "@angular/animations",
  "@angular/common",
  "@angular/compiler",
  "@angular/compiler-cli",
  "@angular/core",
  "@angular/forms",
  "@angular/http",
  "@angular/platform-browser",
  "@angular/platform-browser-dynamic",
  "@ionic-native/camera",
  "@ionic-native/core",
  "@ionic-native/splash-screen",
  "@ionic-native/status-bar",
  "@ionic/pro",
  "@ionic/storage",
  "@ngx-translate/core",
  "@ngx-translate/http-loader",
  "ionic-angular",
  "ionicons",
  "rxjs"
];

const lodashDepdencies = ["@types/lodash", "lodash"];

function BuildAutoDllPlugin(deps) {
  let entry = {
    ionic: ionicDepdencies,
    lodash: lodashDepdencies
  };

  for (let name in deps) {
    entry[name] = deps[name];
  }

  return new AutoDllPlugin({
    filename: "[name]_[hash].js",
    entry: entry
  });
}

defaultConfig.dev.plugins.push(BuildAutoDllPlugin({ dev: devDependencies }));
defaultConfig.prod.plugins.push(BuildAutoDllPlugin());

module.exports = () => defaultConfig;
