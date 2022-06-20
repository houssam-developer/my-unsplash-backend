const express = require('express');
const unsplashService = require('../../domain/UnsplashService');
const { assertIsValidURL, assertIsValidString } = require('../../utils/common-assertions');
const router = express.Router();


function sendAssertion(res, causeArg = '') {
	return res.send({
		assertion: {
			status: 'failed',
			cause: causeArg
		}
	});
}

router.get('/', (req, res) => {
	console.log(`📡 [PhotoController] get() `);

	const keyword = req.query.keyword;
	if (keyword) {
		console.log(`📡 [PhotoController] getByKeyword() #keyword: ${keyword}`,);
		return unsplashService.findByKeyword(keyword)
			.then(photos => res.send({ photos }))
			.catch(err => {
				console.log(`🚩 [PhotoController] get() -> findByKeyword() #err: `, err);
				res.send({ photos: [] });
			})
	}

	unsplashService.findAll()
		.then(it => res.send({ photos: it }))
		.catch(err => {
			console.log(`🚩 [PhotoController] get() -> findAll() #err: `, err);
			res.send({ photos: [] });
		})

});

router.post('/', (req, res) => {
	console.log(`📡 req: `, req.body);

	const photo = req.body;
	if (!photo) {
		console.log(`📡 [PhotoController] post() photo -> isUnknown`);
		return sendAssertion(res, 'object');
	}

	if (!assertIsValidString(photo.label)) { return sendAssertion(res, 'label'); }
	if (!assertIsValidURL(photo.url)) { return sendAssertion(res, 'url'); }

	unsplashService.saveNewPhoto(req.body);
})

router.delete('/:id', (req, res) => {
	let photoId = req.params.id;
	console.log(` 🛃 [PhotoController] delete() #id: `, photoId);

	if (!assertIsValidString(photoId)) { return sendAssertion(res, 'id'); }

	unsplashService.deletePhoto(photoId);
});


module.exports = router;
