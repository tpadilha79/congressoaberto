/*

	Date: 2013-12-03
	Author: Tiago Edgar Padilha <tiago.edgar.padilha@gmail.com>

	Description: File for building the app based on grunt and NodeJS platform.

*/
model.exports = function(grunt) {
	'use strict';
	var project = grunt.file.readJSON('config.build.conf.json');
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Clean last build
		clean: {
			options: { 
				force: true,
				"no=-write": false
			},
			app: ["src/target/app.conf.json"],
			dist: ["www", "reports"],
			release: project.cleanReleasePaths
		},
		//JS Validation
		jshint: {
			kernel: ["src/lib/congressoaberto/*.js"],
			source: ["src/modules/**/*.js", "src/targets/**/*.js"]
		},
		// Running automated tests
		karma: {
			unit: {
                		configFile: "config/karma.conf.js"
            		}
		},
		// Organize/build/distribute packs by environment  
		copy: {
			dev: {
				src: "config/app.dev.conf.json",
                		dest: "src/targets/app.conf.json"
			},
			// Distribution	
			dist: {
                		expand: true,
                		cwd: "src/",
                		src: "**",
                		dest: "www/"
            		}
		},
		

	});
}
