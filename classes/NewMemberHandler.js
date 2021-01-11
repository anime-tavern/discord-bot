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
		console.log(`Fetching channel ${String(ChannelIDs.welcomeChannel)}`);
		const welcomeChannel = await this.client.channels.fetch(String(ChannelIDs.welcomeChannel));
		welcomeChannel.send(`Grab a drink, ${member}`);
		console.log(`Sent welcome message`);
	}
}

module.exports = (new NewMemberHandler);
