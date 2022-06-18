const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');

const unsplashService = (function () {
	console.log(`🚀 unsplashService.init() }`, rootApp);


	const osSep = path.sep;

	function loadAllPhotos() {

		let targetFolderPhotosPath = fileService.getPathString([rootApp, 'public', 'uploads']);

		let photosNames = new Promise((resolve, reject) => {
			fs.readdir(targetFolderPhotosPath, (err, files) => {
				if (err) { console.log(`🚫 readdir() ERR: ${err}`); return; }

				files;
				resolve(files);
			});
		});

		return photosNames;
	}

	return {
		loadAllPhotos
	}

})();

module.exports = unsplashService;