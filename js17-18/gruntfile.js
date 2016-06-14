module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        options: {
        separator: ';'
    },
        dist: {
            src: ['js/src/*.js'],
            dest: 'js/dist/script.min.js'
        }
    },
    uglify: {
        dist: {
            src: 'js/dist/script.min.js',
            dest: 'js/dist/script.min.js'
        }
    },
    cssmin: { 
	    with_banner: {
	       options: {
	           banner: '/* My minified CSS */'  
	    		},
	       files: {
	    			'css/dist/style.min.css' : ['css/src/style1.css', 'css/src/style2.css']
	    		}
	    	}
	    }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};