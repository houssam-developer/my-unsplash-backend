const express = require('express');
const cors = require('cors');
const schedule = require('node-schedule');
const photoController = require('./presentation/controllers/photoController');
const fileService = require('./domain/FileService');


function startup() {
	const app = express();
	app.use(cors());
	app.use(express.json());

	app.get('/', (req, res) => { return res.send('Hello World!'); });
	app.use('/photos', photoController);


	let mySchedule;

	const PORT = 8080;
	app.listen(PORT, () => {
		console.log('Server Started...');
		schedule.scheduleJob('*/1 * * * *', () => {
			fileService.resetData();
			// if failed send email 
		});
	});
}

module.exports = startup;