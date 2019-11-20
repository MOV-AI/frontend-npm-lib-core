const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve("./"),
    filename: "dist/index.js",
    library: "Movai"
  }
};
