const express = require('express');
const cors = require('cors');
const photoController = require('./presentation/controllers/photoController');


function startup() {
	const app = express();
	app.use(cors());
	app.use(express.json());

	app.get('/', (req, res) => { return res.send('Hello World!'); });
	app.use('/photos', photoController);



	const PORT = 8080;
	app.listen(PORT, () => console.log('Server Started...'));
}

module.exports = startup;