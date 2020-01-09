const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    let lschannel = message.mentions.channels.first();
    if(!lschannel){
        return message.channel.send(new Discord.RichEmbed().setTitle(`Please specify a channel`));
    };
    bot.game[message.guild.id] = {
        channel: lschannel.id,
    }
    fs.writeFile(`./game.json`, JSON.stringify(bot.game, null, 4), err => {
        if(err) throw err;
    })
};

module.exports.help = {
    name:"selectchannel"
}