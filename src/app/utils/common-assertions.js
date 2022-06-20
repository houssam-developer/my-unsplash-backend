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
const assertString = x => assertCommon({ x, isValidFn: isValidString });
const assertArray = x => assertCommon({ x, isValidFn: isValidArray });
const assertURL = x => assertCommon({ x, isValidFn: isValidUrl });

// const isAssertionStringFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotValidAttributeAsString });
// const isAssertionPlayRateFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotNumberFromString });
// const isAssertionEffectFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotValidAnimationAttributeEffect });
// const isAssertionURLFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotValidURL });
// const isAssertionExpanseFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotValidExpanseValue });
// const isAssertionNumberAsStringFailed = (targetVal) => isAssertionFailed({ targetVal, isNotValidFn: isNotNumberFromString });

// // MULTIPLE
// const isAssertionStringMultipleFailed = ({ newVal, attrVal, defaultVal }) => {
// 	console.log(`\t|__ 🛃 isAssertionStringMultipleFailed()` );

// 	let localVal = newVal;
// 	if (isAssertionStringFailed(localVal)) { localVal = attrVal; }
// 	if (isAssertionStringFailed(localVal)) { localVal = defaultVal; }

// 	return localVal;
// }

// const isAssertionExpanseMultipleFailed = ({ newVal, attrVal, defaultVal }) => {
// 	console.log(`\t|__ 🛃 isAssertionExpanseMultipleFailed()` );
// 	let localVal = newVal;
// 	if (isAssertionExpanseFailed(localVal)) { localVal = attrVal; }
// 	if (isAssertionExpanseFailed(localVal)) { localVal = defaultVal; }

// 	return localVal;
// }

// const isAssertionButtonTypeFailed = (argumentVal) => {
// 	console.log(`\t\t|__ 🛃 isAssertionButtonTypeFailed() #argumentVal: ${argumentVal}` );

// 	if (isAssertionStringFailed(argumentVal)) { return true; }
// 	// if present return false;
// 	let result = Object.values(ButtonType).some( it => it === argumentVal);

// 	console.log(`\t\t\t|__ 🛃 isAssertionButtonTypeFailed() ButtonType.some(${argumentVal}) >>> #result: ${result}` );

// 	return !result;
// }


module.exports = {
	assertString,
	assertArray,
	assertURL
}