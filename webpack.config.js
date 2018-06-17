module.exports = {
  context: __dirname,
  entry: "./javascript/main.js",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: 'source-maps'
};
