const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');

const unsplashService = (function () {

	console.log(`🚀 unsplashService.init() }`, rootApp);

	const osSep = path.sep;

	function loadAllPhotos() {

		let targetPath = fileService.getPathString([rootApp, 'public', 'uploads']);

		fs.readdir(targetPath, (err, files) => {
			if (err) { console.log(`🚫 readdir() ERR: ${err}`); return; }
			files.forEach(it => console.log('🔁 #it:', it))
		})
	}

	return {
		loadAllPhotos
	}

})();

module.exports = unsplashService;