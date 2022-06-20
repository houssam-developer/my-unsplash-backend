// --------------------------------------------------------------------------------------------------
// 🔹 APP
// --------------------------------------------------------------------------------------------------
const isNull = x => x === null;
const isNotNull = x => !isNull(x);

const isUndefined = x => x === undefined;
const isNotUndefined = x => !isUndefined(x);

const isUnknown = x => isNull(x) || isUndefined(x);
const isNotUnknown = x => isNotNull(x) && isNotUndefined(x);

// arrays
const isArray = (a = []) => Array.isArray(a);
const isEmptyArray = (a = []) => a.length ? false : true;
const isNotEmptyArray = a => !isEmptyArray(a);
const isValidArray = a => isArray(a) && isNotEmptyArray(a);

// types
const isBoolean = x => typeof x === "boolean" || x.constructor === Boolean;
const isNumber = x => !isNaN(x);
const isValidNumber = x => isNotUnknown(x) && isNumber(x);

const isNegativeNumber = x => {
	let y = Math.sign(x);

	if (!isValidNumber(y)) { console.log(`🚫 isNegativeNumber() not valid x: ${x}`); }
	switch (y) {
		case 1: { return false; }
		case -1: { return true; }
		case 0: { return false; }
		case -0: { return true; }
		default: { return false; }
	}
}
const isPositiveNumber = x => isValidNumber(x) && !isNegativeNumber(x);
const convertToPositiveNumber = x => Math.abs(x);

// --------------------------------------------------------------------------------------------------
// 🔹 String Methods
// --------------------------------------------------------------------------------------------------

const isString = s => {
	try {
		s.substring(0, s.length);
		return true;
	} catch (err) {
		console.log(`🚫 isString() #err: `, err);
		return false;
	}
}

const isNotEmptyString = s => s.length !== 0;

const isValidString = s => isString(s) && isNotEmptyString(s);

// conversions
const isBooleanFromString = s => {
	if (s.toLowerCase() === 'true' || s.toLowerCase() === 'false') { return true; }
	return false;
}

const isNumberFromString = s => {
	try {
		return isNumber(parseInt(s));
	} catch (err) {
		console.log(`🚫 isNumberFromString() #err: `, err);
		return false;
	}
}


// --------------------------------------------------------------------------------------------------
// 🔹 URL
// --------------------------------------------------------------------------------------------------
const isUrl = s => {
	console.log(`\t\t|__ 🚧 isUrl #s: `, s);
	try {
		//TODO: DO more validation to check url 
		//let url = new URL(s);
		//return url.protocol === 'http:' || url.protocol === 'https:';
		let urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return urlRegex.test(s);
	}
	catch (ex) {
		console.log(`\t\t|__🚫 isUrl() #ex: `, ex);
		return false;
	}
}

const isValidUrl = s => isValidString(s) && isUrl(s)

module.exports = {
	isNull,
	isNotNull,
	isUndefined,
	isNotUndefined,
	isUnknown,
	isNotUnknown,
	isArray,
	isEmptyArray,
	isNotEmptyArray,
	isBoolean,
	isNumber,
	isNegativeNumber,
	isPositiveNumber,
	convertToPositiveNumber,
	isString,
	isNotEmptyString,
	isBooleanFromString,
	isNumberFromString,
	isValidString,
	isValidArray,
	isValidNumber,
	isValidUrl
}