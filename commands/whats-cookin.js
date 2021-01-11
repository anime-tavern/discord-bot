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
		["on", "the", "menu"],
		["today's", "menu"],
		["todays", "menu"],
		["menu", "for", "today"],
		["menu", "for", "tonight"],
		["tonight's", "menu"],
		["what're", "we", "havin"],
		["what", "to", "eat"],
		["im", "hungry"],
	]
};
