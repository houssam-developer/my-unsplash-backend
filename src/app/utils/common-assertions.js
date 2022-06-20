const { isNull, isUndefined, isValidArray, isValidString, isValidUrl } = require("./common-predicate");

// --- CORE FN
const assertCommon = ({ x, isValidFn }) => {
	console.log(`\t|__ 🛃 🚥 assertCommon() #x: `, x);

	if (isNull(x)) { return false; }
	if (isUndefined(x)) { return false; }
	if (isValidFn(x)) {
		// assertion success
		console.log(`\t|__ 🛃 🏁 assertCommon() all verifications ✅ #isValidFn.name: ${isValidFn.name}`);
		return true;
	}

	// assertion failed
	console.log(`\t|__ 🛃 🏁 ❌ assertCommon() one or more assert is failed`);
	return false;
}


// --------------------------------------------------------------------------------------------------
// 🔹 ASSERTIONS 
// --------------------------------------------------------------------------------------------------

// --- DECORATORS
const assertIsValidString = x => assertCommon({ x, isValidFn: isValidString });
const assertIsValidArray = x => assertCommon({ x, isValidFn: isValidArray });
const assertIsValidURL = x => assertCommon({ x, isValidFn: isValidUrl });


module.exports = {
	assertIsValidString,
	assertIsValidArray,
	assertIsValidURL
}