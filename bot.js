//Declarations for global scope
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botconfig.prefix;
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.players = require("./players.json");
bot.game = require("./game.json");

fs.readdir("./cmds/", (err, files) => {
	if (err){
		console.error(err);
	}	
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0){
		console.log("No files found!!");
	}

	console.log(`Loaded ${jsfiles.length} commands`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded!`)
		bot.commands.set(props.help.name, props);
	});

});

//Login
bot.login(process.env.token);

//Starts the bot and logs the server invite link
bot.on("ready", async() => {
	console.log(`Bot is ready !!! ${bot.user.username}`);
	console.log(bot.commands);
	
		try{
			//Presence Start
			bot.user.setStatus("online");
			bot.user.setActivity(`L's game`, {type : "PLAYING"})
			//Presence End
			let link = await bot.generateInvite(["ADMINISTRATOR"]);
			console.log(link);

	    }
		catch(e){
			console.log(e.stack);
	}
	});
	
	bot.on('message', async message => {
	
		try {
		if (message.author.bot) {
			return;
		}
		if (message.channel.type === "dm"){
			return;
		}

		let msgArray = message.content.split(/\s+/g);
		let command = msgArray[0];
		let args = msgArray.slice(1);
	
		if (!command.startsWith(prefix)){
			return;
			}

		let cmd = bot.commands.get(command.slice(prefix.length));
		if (cmd) cmd.run(bot, message, args);
		}
		catch(e){
			console.log(e.stack);
		}
		
	});
