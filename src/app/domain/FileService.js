const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

const fileService = (function () {
	const targetDBFilePath = getPathString([rootApp, 'src', 'app', 'data', 'db.json']);
	const targetDBFileBackupPath = getPathString([rootApp, 'src', 'app', 'data', 'db-backup.json']);

	function resetData() {
		console.log(`🚧 [FileService] resetData() `);
		try {
			fs.readFile(targetDBFileBackupPath, 'utf-8', (err, data) => {
				if (err) {
					console.log(`🚫 [FileService] resetData() -> readFile() failed #err: `, err);
					return;
				}

				fs.writeFile(targetDBFilePath, data, (err) => {
					if (err) {
						console.log(`🚫 [FileService] resetData() -> writeFile() failed #err: `, err);
						return;
					}
					console.log(`\t|__ 🔦 [FileService] resetData() reset data-json done! `);
				});
			});
		} catch (err) {
			console.log(`🚫 [FileService] resetData() Exception -> #err: `, err);
		}
	}

	function getPathString(args) {
		let pathVal = '';
		const osSeparator = path.sep;

		args.forEach(it => {
			pathVal += `${it}${osSeparator}`
		});

		console.log(`🚧 [FileService] getPathString() #pathVal: ${pathVal}`);

		// remove path without separator at last of path
		return pathVal.slice(0, pathVal.length - osSeparator.length);
	}

	function getPathObject(args) {
		let pathVal = '';
		const osSeparator = path.sep;

		args.forEach(it => { pathVal += `${it}${osSeparator}` });

		// remove path without separator at last of path
		pathVal = pathVal.slice(0, pathVal.length - osSeparator.length)
		return path.parse(pathVal);
	}

	function writeToJSON(photosDataUpdated) {
		console.log(`\t|__ 🚧  [FileService] writeToJson()`,);

		return new Promise((resolve, reject) => {
			const photosJsonString = JSON.stringify(photosDataUpdated);
			//		console.log(`🏁 photoJsonString: `, photosJsonString);

			fs.writeFile(targetDBFilePath, photosJsonString, (err) => {
				if (err) {
					console.log(`🚫 readFile() db.json failed #err: ${err}`); return;
					reject(err);
				}
				console.log(`\t|__ 📥 [FileService] writeToJSON() -> db.json updated`);
				resolve({ action: 'delete' });
			});
		});
	}

	function readFromJson() {
		console.log(`\t|__ 🚧  [FileService] readFromJson()`,);
		return new Promise((resolve, reject) => {
			fs.readFile(targetDBFilePath, 'utf-8', (err, data) => {
				try {
					resolve(JSON.parse(data));
					console.log(`\t|__ 🚧  [FileService] readFromJson() resolve ok`,);
				} catch (err) {
					reject(err);
				}
			});
		});
	}

	return {
		getPathString,
		getPathObject,
		writeToJSON,
		readFromJson,
		resetData
	}

})();

module.exports = fileService;