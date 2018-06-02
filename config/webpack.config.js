/**
 * Override the Ionic build settings
 */
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const path = require("path");
const defaultConfig = require("@ionic/app-scripts/config/webpack.config.js");
const AutoDllPlugin = require("autodll-webpack-plugin");
const env = process.env.IONIC_ENV;

//Cache depedencies for quicker builds.
defaultConfig[env].plugins.push(new HardSourceWebpackPlugin());
defaultConfig[env].plugins.push(
  new AutoDllPlugin({
    filename: "[name]_[hash].js",
    entry: {
      vendor: [
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
        "@types/lodash",
        "autodll-webpack-plugin",
        "hard-source-webpack-plugin",
        "ionic-angular",
        "ionicons",
        "lodash",
        "luhn",
        "rxjs",
        "sw-toolbox",
        "zone.js"
      ]
    }
  })
);

module.exports = function() {
  return defaultConfig;
};
