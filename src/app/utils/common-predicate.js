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
const isValidArray = a => isNotNull(a) && isNotUndefined(a) && isArray(a) && isNotEmptyArray(a);

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

const isValidString = s => isNotNull(s) && isNotUndefined(s) && isString(s) && isNotEmptyString(s);

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