const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./client/index.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'client/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}