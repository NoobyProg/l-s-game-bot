const Discord = require("discord.js");
const fs = require("fs");
const start = require("./start");

module.exports.run = async(bot, message, args) => {
    fs.readFile("./game.json", (err, data) => {
        if(err) throw err;
        let gameState = JSON.parse(data);
        console.log(gameState);
        if(gameState.hasOwnProperty(message.guild.id)){
            let player = message.author;
            bot.players[player.id] = {
                guild:message.guild.id,
            }
            if(bot.players.hasOwnProperty(player.id)){
                return message.channel.send(new Discord.RichEmbed().setTitle(`You are already in the current L's game`));
            }
        
            fs.writeFile("./players.json", JSON.stringify(bot.players, null, 4), err => {
                if(err) throw err;
                console.log("Added a player");
            })
        }
        else{
            message.channel.send(new Discord.RichEmbed().setTitle(`No L's game is currently underway !!`));
        }
    });
};

module.exports.help = {
    name:"join"
}