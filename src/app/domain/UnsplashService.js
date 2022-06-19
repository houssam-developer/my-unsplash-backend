const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');

const unsplashService = (function () {
	console.log(`🚀 unsplashService.init() }`, rootApp);


	const osSep = path.sep;

	function loadAllPhotos() {
		console.log(`🚧 loadPhotos()`);
		let targetFolderPhotosPath = fileService.getPathString([rootApp, 'public', 'uploads']);

		let photosNames = new Promise((resolve, reject) => {
			fs.readdir(targetFolderPhotosPath, (err, files) => {
				if (err) { console.log(`🚫 readdir() ERR: ${err}`); return; }

				files;
				resolve(files);
			});
		});

		let targetDBFilePath = fileService.getPathString([rootApp, 'src', 'app', 'data', 'db.json']);
		console.log(`📡 dbJsonPath: `, targetDBFilePath);

		let dbJson;
		fs.readFile(targetDBFilePath, 'utf-8', (err, data) => {
			dbJson = JSON.parse(data);

			console.log(`🏁 #dbJson: `, dbJson[0]);
		});





		return photosNames;
	}

	function saveNewPhoto(photo) {
		console.log(`🚧 saveNewPhotos() #photo: ${JSON.stringify(photo)}`);

		// read photo
		// check photo model is map to PhotoModel
		// if photo exists update rank
		// else save photo to db.json
	}

	return {
		loadAllPhotos,
		saveNewPhoto
	}

})();

module.exports = unsplashService;