module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	less: {
		development: {
			files: {
				'pubStaticFrontendVortexSummit/css/styles-m.css': 'Summit/web/css/styles-m.less',
				'pubStaticFrontendVortexSummit/css/styles-t.css': 'Summit/web/css/styles-t.less',
				'pubStaticFrontendVortexSummit/css/styles-d.css': 'Summit/web/css/styles-d.less',
				'pubStaticFrontendVortexSummit/css/styles.css': 'Summit/web/css/styles.less',

				'pubStaticFrontendVortexSummit/css/customer-m.css': 'Summit/web/css/customer-m.less',
				'pubStaticFrontendVortexSummit/css/customer-t.css': 'Summit/web/css/customer-t.less',
				'pubStaticFrontendVortexSummit/css/customer-d.css': 'Summit/web/css/customer-d.less',
				'pubStaticFrontendVortexSummit/css/customer.css': 'Summit/web/css/customer.less'
			}
		},
	},
	watch: {
		css: {
			files: '**/*.less',
			tasks: 'less'
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
grunt.registerTask('default', ['watch']); 

};