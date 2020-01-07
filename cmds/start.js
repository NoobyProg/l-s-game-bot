const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    bot.game[message.guild.id] = {
        value: true
    }

    fs.writeFile("./game.json", JSON.stringify(bot.game, null, 4), err => {
        if(err) throw err;
    })
    message.channel.send(new Discord.RichEmbed()
                                .setTitle(`L's game created, players use !join to join the game`));
    let player = message.author;
    bot.players[player.id] = {
        guild:message.guild.id,
    }

    fs.writeFile("players.json", JSON.stringify(bot.players, null, 4), err =>{
        if (err) throw err;
        console.log("Added a player");
    })
};

module.exports.help = {
    name:"start"
}