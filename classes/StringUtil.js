class StringUtil{
	/**
	* Capitalizes the first letter of the string
	* @param {string} str
	* @returns {string}
	*/
	static capitalizeFirstLetter(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}

module.exports = StringUtil;
