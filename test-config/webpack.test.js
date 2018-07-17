var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "inline-source-map",

  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@mock-providers": path.resolve(
        __dirname,
        "../src/mocks/providers/index.ts"
      ),
      "@providers": path.resolve(__dirname, "../src/providers/index.ts"),
      "@mock-providers": path.resolve(
        __dirname,
        "../src/mocks/providers/index.ts"
      ),
      "@models": path.resolve(__dirname, "../src/models/index.ts"),
      "@pages": path.resolve(__dirname, "../src/pages/index.ts"),
      "@components": path.resolve(__dirname, "../src/components/index.ts")
    }
  },

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              experimentalWatchApi: true
            }
          },
          "angular2-template-loader"
        ]
      },
      {
        test: /.+\.ts$/,
        exclude: /(index.ts|mocks.ts|\.spec\.ts$)/,
        loader: "istanbul-instrumenter-loader",
        enforce: "post",
        query: {
          esModules: true
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader?attrs=false"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: "null-loader"
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
      root("./src"), // location of your src
      {} // a map of your routes
    )
  ]
};

function root(localPath) {
  return path.resolve(__dirname, localPath);
}
