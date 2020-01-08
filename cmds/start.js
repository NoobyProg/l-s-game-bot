const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    bot.game[message.guild.id] = {
        value: true
    }

    fs.writeFile("./game.json", JSON.stringify(bot.game, null, 4), err => {
        if(err) throw err;
    })
    await message.channel.send(new Discord.RichEmbed()
                                .setTitle(`L's game created, players use !join to join the game`));
};

module.exports.help = {
    name:"start"
}