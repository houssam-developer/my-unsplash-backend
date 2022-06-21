const express = require('express');
const cors = require('cors');
const schedule = require('node-schedule');
const photoController = require('./presentation/controllers/photoController');
const fileService = require('./domain/FileService');


function startup() {
	const app = express();
	app.use(cors());
	app.use(express.json());

	app.get('/', (req, res) => res.json({ msg: 'welcome to my-unsplash api' }));
	app.use('/photos', photoController);

	const PORT = 8080;
	app.listen(process.env.PORT || PORT, () => {
		console.log('Server Started...');
		schedule.scheduleJob('0 0 * * *', () => {
			fileService.resetData();
			// if failed send email 
		});
	});
}

module.exports = startup;