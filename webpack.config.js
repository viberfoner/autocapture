const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'autocapture.js',
    path: path.resolve(__dirname, 'lib'),
  },
  watchOptions: {
    ignored: /node_modules/,
  }
}