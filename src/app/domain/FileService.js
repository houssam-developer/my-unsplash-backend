const path = require('path');
const fs = require('fs');

const fileService = (function () {

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


	return {
		getPathString,
		getPathObject
	}

})();

module.exports = fileService;