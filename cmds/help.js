const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
                                        .setTitle(`More detailed help command coming soon`)
                                        .setDescription(`For now`)
                                        .addField(`!create`,`Creates a game in the server (currently support only 1 game per server)`)
                                        .addField(`!join`,`To join a game (those who used !start also need to do this)`)
                                        .addField(`!selectchannel <channel>`,`Selects the channels to play L's game in`)
                                        .addField(`!start`, `Starts the game`)
    message.channel.send(helpEmbed);
};

module.exports.help = {
    name:"help"
}