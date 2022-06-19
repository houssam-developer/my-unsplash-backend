const express = require('express');
const unsplashService = require('../../domain/UnsplashService');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(`📦 photoController: `);
	unsplashService.loadAllPhotos()
		.then(it => res.send({ photos: it }))
});


module.exports = router;