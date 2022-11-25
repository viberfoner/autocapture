const path = require('path');

module.exports = function(env, argv) {
  return {
    mode: env.prod ? 'prod' : 'development',
    devtool: env.prod ? 'source-map' : 'eval-source-map',
    watch: !env.prod,
    entry: './src/index.js',
    output: {
      filename: 'autocapture.js',
      path: path.resolve(__dirname),
    },
  };
}