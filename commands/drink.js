const Discord = require("discord.js");

module.exports = {
	fire:function(msgContent){
		const embed = new Discord.MessageEmbed();
		embed.setTitle("Drink up!");
		embed.attachFiles([
			"./images/drink-up-1.png"
		]);
		embed.setImage("attachment://drink-up-1.png");

		return embed;
	},

	// The matrix of strings to use to determine if this command matches the msgContent
	messageMatrix:[
		["i", "need", "a", "drink"],
		['with', 'a', 'drink'],
		[/(can|could|may)/,'i','a','drink'],
		['set','up','a','drink'],
		['serve','me','drink'],
		['serve','us',/drinks*/],
		['we','need',/drinks*/],
		['we','need','a','drink'],
		["we're","thirsty"],
		[/i'*m/,"thirsty"]
	]
};
