module.exports = {
  context: __dirname,
  entry: "./javascript/main.js",
  output: {
    filename: "./javascript/bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: 'source-maps'
};
