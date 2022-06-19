const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');

const unsplashService = (function () {
	console.log(`🚀 unsplashService.init() }`, rootApp);


	const targetDBFilePath = fileService.getPathString([rootApp, 'src', 'app', 'data', 'db.json']);
	let photosData = [];

	function loadAllPhotos() {
		console.log(`🚧 loadPhotos()`);
		//let targetFolderPhotosPath = fileService.getPathString([rootApp, 'public', 'uploads']);
		// let photosNames = new Promise((resolve, reject) => {
		// 	fs.readdir(targetFolderPhotosPath, (err, files) => {
		// 		if (err) { console.log(`🚫 readdir() ERR: ${err}`); return; }

		// 		files;
		// 		resolve(files);
		// 	});
		// });

		console.log(`📡 dbJsonPath: `, targetDBFilePath);
		let photosDataPromise = new Promise((resolve, reject) => {
			fs.readFile(targetDBFilePath, 'utf-8', (err, data) => {
				try {
					photosData = JSON.parse(data);
					resolve(photosData);
				} catch (err) {
					reject(err);
				}
			});
		});

		return photosDataPromise;
	}

	function saveNewPhoto(photo) {
		console.log(`🚧 saveNewPhotos() #photo: ${JSON.stringify(photo)}`);

		// read photo
		// check photo model is map to PhotoModel
		// if photo exists update rank
		// else save photo to db.json

		let photosDataUpdated = [photo, ...photosData];

		//console.log(`🏁 photoDataUpdated: `, photosDataUpdated);

		fs.writeFile(targetDBFilePath, JSON.stringify(photosDataUpdated), (err) => {
			if (err) { console.log(`🚫 readFile() db.json failed #err: ${err}`); return; }
			console.log(`📥 db.json updated`);
		});
	}

	return {
		loadAllPhotos,
		saveNewPhoto
	}

})();

module.exports = unsplashService;