const express = require('express');
const unsplashService = require('../../domain/UnsplashService');
const { assertString, assertURL } = require('../../utils/common-assertions');
const router = express.Router();


router.get('/', (req, res) => {
	console.log(`📦 photoController: `);
	unsplashService.loadAllPhotos()
		.then(it => res.send({ photos: it }))
});

router.post('/', (req, res) => {
	console.log(`📡 req: `, req.body);

	const photo = req.body;
	if (!photo) {
		console.log(`📡 [PhotoController] post() photo -> isUnknown`);
		return res.send({
			assertion: {
				status: 'failed',
				cause: 'object'
			}
		});
	}
	if (!assertString(photo.label)) {
		return res.send({
			assertion: {
				status: 'failed',
				cause: 'label'
			}
		});
	}
	if (!assertURL(photo.url)) {
		return res.send({
			assertion: {
				status: 'failed',
				cause: 'url'
			}
		});

	}

	// check photo
	// save photo
	// return resolve OK || FAILED
	unsplashService.saveNewPhoto(req.body);
})

router.delete('/:id', (req, res) => {
	let photoId = req.params.id;
	console.log(` 🛃 [PhotoController] delete() #id: `, photoId);

	unsplashService.deletePhoto(photoId);
});


module.exports = router;