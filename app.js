// Load the environment
const fs = require("fs");
const environmentJSON = fs.readFileSync("./env.json");
const environmentData = JSON.parse(environmentJSON);

// Load environment variables
for (let key of Object.keys(environmentData)){
	process.env[key] = environmentData[key];
};

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Tavern Maid is ready");
});

client.on("message", message => {
	msgContent = message.content;
	msgContent_lower = msgContent.toLowerCase();
	console.log(msgContent_lower);
	if (msgContent_lower === "i need a drink"){

		const embed = new Discord.MessageEmbed();
		embed.setTitle("Drink up!");
		embed.attachFiles([
			"./images/drink-up-1.png"
		]);
		embed.setImage("attachment://drink-up-1.png");
		message.channel.send(embed);
	}
});

client.login(process.env.client_secret);
