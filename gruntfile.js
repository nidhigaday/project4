module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '*/css',
          src: ['*.css', '!*.min.css'],
          dest: '*/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNomTasks('grunt-contrib-cssmin');

  grunt.registerTasks('default', ['cssmin']);
};