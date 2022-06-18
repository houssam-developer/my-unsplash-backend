


const express = require('express');
const cors = require('cors');
const unsplashService = require('./domain/UnsplashService');


const startup = () => {


	const app = express();

	app.use(cors());

	app.get('/', (req, res) => { return res.send('Hello World!'); });
	app.get('/photos', (req, res) => {
		unsplashService.loadAllPhotos()
			.then(it => res.send({ photos: it }))
	});


	const PORT = 8080;
	app.listen(PORT, () => console.log('Server Started...'));

}

module.exports = startup;