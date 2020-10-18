/**
* Checks if a string matches any of the matrix entries
* @param {string} message
* @param {array[]} matrix An array of arrays. Each inner array has string values
* @returns {bool}
*/
function matrixSearch(message, matrix){
	// Remove all the newlines and returns
	message = message.replace("\r", " ");
	message = message.replace("\n", " ");

	// Replace all tabs (how did these get in here?) with a space
	message = message.replace("\t", " ");

	// Replace all multiple-space occurrences with a single space
	message = message.replace(/\s{2,}/, " ");

	// Should now have a single line with a maximum of one space separating
	// characters or words
	// Split them into an array
	const messageSubs = message.split(" ");
	let matchedWordArray = null; // The matched wordArray, if any, in the matrix matching the message

	allWordArraysLoop:
	for (const wordArray of matrix){
		// console.log(`Testing ${message} against ${wordArray}`);
		// This variable (currentMessageSub) will constantly be updated
		// during the search. Every time an occurence of the string
		// in the matrix is found, it is chopped up to that word's end
		// to enforce the order of the matrix search
		let currentMessageSubs = [...messageSubs]; // Force-copies the array to new data memory
		let index = 0;
		wordArrayLoop:
		for (const word of wordArray){

			// Test both perfect-string matching and then regex matching
			const indexOfWordFound = currentMessageSubs.findIndex( element => {
				if (word instanceof RegExp){
					return word.test(element);
				}else{
					if (word == element){
						return true;
					}
				}
			});

			// Was the word found in the array?
			if (indexOfWordFound > -1){
				// console.log(`Matched on word: ${word}`);
				if (index == wordArray.length-1){
					// Last index, and it matched. Successful matrix match
					matchedWordArray = wordArray;
					break allWordArraysLoop; // Break out of both loops
				}else{
					// Truncate the currentMessageSub to now
					// begin after the matched matrix word
					currentMessageSubs = currentMessageSubs.slice(indexOfWordFound);
					// console.log(`Tuncating test string. String is now ${currentMessageSubs}`);
				}

			}else{
				// No match. Break out of this array search
				break wordArrayLoop;
			}

			++index;
		}
	}

	if (matchedWordArray){
		return true; // TODO: Maybe return the word array instead?
	}else{
		return false;
	}
}

module.exports = matrixSearch;
