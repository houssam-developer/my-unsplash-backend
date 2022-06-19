const express = require('express');
const unsplashService = require('../../domain/UnsplashService');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(`📦 photoController: `);
	unsplashService.loadAllPhotos()
		.then(it => res.send({ photos: it }))
});

router.post('/', (req, res) => {
	console.log(`📡 req: `, req.body);

	// check photo
	// save photo
	// return resolve OK || FAILED
	unsplashService.saveNewPhoto(req.body);
})


module.exports = router;