const ChannelIDs = require("./ChannelIDs");

class NewMemberHandler{

	constructor(){

		/** @property {DiscordClient} client */
		this.client = null;
	}

	/**
	* When a new member joins the Discord server
	* @param {Member} member
	*/
	async onNewMemberJoined(member){
		const welcomeChannel = await this.client.channels.fetch(ChannelIDs.welcomeChannel);
		welcomeChannel.send(`Grab a drink, ${member}`);
	}

	/**
	* Gets a string message welcoming the new member
	* @param {Member} member
	* @returns {string}
	*/
	getNewMemberMessage(member){
		const messages = [
			`We're serving more than just drinks, ${member}!`,
			`${member}, glad you're here! A barfight just happened.`,
			`${member} is here for their bread and wine.`,
			`Grab a drink, ${member}`,
			`${member} is the new weeb in the Tavern.`,
			`Ready for a cold one and a cold heart ${member}?`,
			`Well, if it isn't the patron, ${member}. Care for a round?`,
			`Drinks on us today, ${member}!`,
			`You've joined the Anime Tavern, ${member}. Food is waiting :)`
		];

		return messages[Math.floor(Math.random() * messages.length)];
	}
}

module.exports = (new NewMemberHandler);
