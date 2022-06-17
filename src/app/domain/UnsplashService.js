const fs = require('fs');
const path = require('path');

const unsplashService = (function () {

	console.log(`🚀 unsplashService.init() }`, rootApp);

	const osSep = path.sep;

	function loadAllPhotos() {
		const targetPhotosDir = path.parse(`${rootApp}${osSep}public${osSep}uploads`);
		console.log(`📦 #targetPhotosDir: `, targetPhotosDir);
		fs.readdir(path.format(targetPhotosDir), (err, files) => {
			if (err) { console.log(`🚫 readdir() ERR: ${err}`); return; }

			files.forEach(it => console.log('🔁 #it:', it))
		})
	}

	return {
		loadAllPhotos
	}

})();

module.exports = unsplashService;