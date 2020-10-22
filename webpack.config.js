const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  watch: true,
  entry: "./index.js",
  output: {
    path: path.resolve("./"),
    filename: "dist/index.js",
    library: "Movai",
    libraryTarget: "umd"
  },
  target: "web", // in order to ignore built-in modules like path, fs, etc.
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-json-strings",
              [
                "@babel/plugin-transform-runtime",
                { useESModules: true, helpers: true }
              ]
            ]
          }
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  }
};
