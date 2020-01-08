const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
                                        .setTitle(`More detailed help command coming soon`)
                                        .setDescription(`For now`)
                                        .addField(`!start`,`Creates a game in the server (currently support only 1 game per server)`)
                                        .addField(`!join`,`To join a game (those who used !start also need to do this)`)
    message.channel.send(helpEmbed);
};

module.exports.help = {
    name:"help"
}