const webpackConfig = require("./webpack.config.js");

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      prod: webpackConfig,
      dev: Object.assign({
        watch: true,
        devtool: 'eval-source-map'
      }, webpackConfig),
    },
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('dev', ['webpack:dev']);
}