const express = require('express');

const startup = () => {
	const app = express();

	app.get('/', (req, res) => {
		return res.send('Hello World!');
	});

	const PORT = 8080;
	app.listen(PORT, () => console.log('Server Started...'));

}
module.exports = startup;