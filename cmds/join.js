const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    fs.readFile("./game.json", (err, data) => {
        if(err) throw err;
        let gameState = JSON.parse(data);
        if(gameState.hasOwnProperty(message.guild.id)){
            function genNum(){
                return Math.floor((Math.random() * 7) + 0);
            };
            let roles = ["L", "Investigator", "Investigator", "Investigator","Investigator", "Kira", "Kira Worshipper"];
            let player = message.author;
            if(bot.players.hasOwnProperty(player.id)){
                return message.channel.send(new Discord.RichEmbed().setTitle(`You are already in the current L's game`));
            }
            if(genNum() > roles.length) return;
            else{
            let playerRole = roles[genNum()];
            
            bot.players[player.id] = {
                guild:message.guild.id,
                role: playerRole,
            }
        
            fs.writeFile("./players.json", JSON.stringify(bot.players, null, 4), err => {
                if(err) throw err;
                console.log("Added a player");
            })
        }
        }
        else{
            message.channel.send(new Discord.RichEmbed().setTitle(`No L's game is currently underway !!`));
        }
    });
};

module.exports.help = {
    name:"join"
}