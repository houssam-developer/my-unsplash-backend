const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');
const { v4: uuidv4 } = require('uuid');


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

		// if (photosData.filter(it => it.url === photo.url)) {
		// 	console.log(`|__ 🛃 already exists() #photo.url: ${photo.url}`);
		// 	return;
		// }

		const newPhoto = {
			id: uuidv4(),
			label: photo.label,
			url: photo.url

		};
		const photosDataUpdated = [newPhoto, ...photosData];

		const photosJsonString = JSON.stringify(photosDataUpdated);
		//		console.log(`🏁 photoJsonString: `, photosJsonString);
		console.log(`🏁 photoUpdated: `, photosDataUpdated);

		fs.writeFile(targetDBFilePath, photosJsonString, (err) => {
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