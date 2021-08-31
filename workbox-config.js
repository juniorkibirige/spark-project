module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,js,ico,html,txt,css}'
	],
	swDest: 'build/service-worker-custom.js',
	swSrc: 'src/service-worker.js'
};