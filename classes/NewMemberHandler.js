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
		const welcomeChannel = await client.channels.fetch(String(ChannelIDs.welcomeChannel));
		welcomeChannel.send(`Grab a drink, ${member}`);
	}
}

module.exports = (new NewMemberHandler);
