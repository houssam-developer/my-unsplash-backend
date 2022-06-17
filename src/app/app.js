const express = require('express');
const cors = require('cors');

const startup = () => {
	const app = express();

	app.use(cors());

	app.get('/', (req, res) => {
		return res.send('Hello World!');
	});

	const PORT = 8080;
	app.listen(PORT, () => console.log('Server Started...'));

}
module.exports = startup;