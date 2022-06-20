const fs = require('fs');
const path = require('path');
const fileService = require('./FileService');
const { v4: uuidv4 } = require('uuid');


const unsplashService = (function () {
	console.log(`🚀 unsplashService.init() }`, rootApp);

	let photosData = [];

	function loadAllPhotos() {
		console.log(`🚧 [UnsplashService] loadPhotos()`);

		let photosDataPromise = new Promise((resolve, reject) => {
			fileService.readFromJson()
				.then(photos => resolve(photos))
				.catch(err => reject(err));
		});

		return photosDataPromise;
	}

	function saveNewPhoto(photo) {
		console.log(`🚧 [UnsplashService] saveNewPhotos() #photo: ${JSON.stringify(photo)}`);

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

		fileService
			.readFromJson()
			.then(photos => {
				const photosDataUpdated = [newPhoto, ...photos];
				//console.log(`🚧 [UnsplashService] addNewPhoto() #photoDataUpdated: `, photosDataUpdated);
				fileService.writeToJSON(photosDataUpdated);
			})
			.catch(err => console.log(`🚫  [UnsplashService] addNewPhoto() #err: `, err))

	}

	function deletePhoto(id) {
		console.log(`🚧 [UnsplashService] deletePhoto() #id: ${id} `);
		fileService
			.readFromJson()
			.then(photos => {
				const photosDataUpdated = photos.filter(it => it.id !== id);
				//console.log(`🚧 [UnsplashService] deletePhoto() #photoDataUpdated: `, photosDataUpdated);
				fileService.writeToJSON(photosDataUpdated);
			})
			.catch(err => console.log(`🚫  [UnsplashService] deletePhoto() #err: `, err))
	}

	return {
		loadAllPhotos,
		saveNewPhoto,
		deletePhoto
	}

})();

module.exports = unsplashService;