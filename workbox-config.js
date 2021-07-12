module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,js,ico,html,txt,css}'
	],
	swDest: 'src/service-worker-custom.js',
	swSrc: 'src/service-worker.js'
};