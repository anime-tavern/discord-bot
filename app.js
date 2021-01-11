// Load the environment
const fs = require("fs");
const environmentJSON = fs.readFileSync("./env.json");
const environmentData = JSON.parse(environmentJSON);

// Load environment variables
for (let key of Object.keys(environmentData)){
	process.env[key] = environmentData[key];
};

const Discord = require("discord.js");
const matrixSearch = require("./utils/matrixSearch.js");
const client = new Discord.Client();
const commands = [];

// Classes
const ChannelIDs = require("./classes/ChannelIDs");
const NewMemberHandler = require("./classes/NewMemberHandler");

// Set singleton properties
NewMemberHandler.client = client;

// Load commands
const commandFiles = fs.readdirSync("./commands").filter( file => { return file.endsWith(".js") } );
for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	commands.push(command);
}

client.once("ready", async () => {
	console.log("Oi! The tavern girl is ready to serve!");
});

client.on("guildMemberAdd", member => {
	console.log(`New member joined`);
	NewMemberHandler.onNewMemberJoined(member);
});

client.on("message", async message => {

	if (message.author.bot){
		console.log(`A bot has spoken. Ignoring.`);
		return;
	}

	msgContent = message.content;
	msgContent_lower = msgContent.toLowerCase();

	// Test all commands for a match
	for (const command of commands){
		const matrixMatched = matrixSearch(msgContent_lower, command.messageMatrix);
		if (matrixMatched){
			message.channel.send(command.fire(message));
		}
	}
});

client.login(process.env.client_secret);
