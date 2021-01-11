const Discord = require("discord.js");
const TodaysCooking = require("../classes/TodaysCooking.js");

module.exports = {
	fire:function(msgContent){
		return TodaysCooking.getMenuItemAsSentence();
	},

	// The matrix of strings to use to determine if this command matches the msgContent
	messageMatrix:[
		["what", "is", "cooking"],
		["what", "is", "cookin"],
		["what's", "cooking"],
		["what's", "cookin"],
	]
};
