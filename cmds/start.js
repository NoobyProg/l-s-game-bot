const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    let invEmbed = new Discord.RichEmbed()
                                        .setTitle(`Welcome to L's game`)
                                        .setDescription(`${player.username} you are an Investigator`)

    if(bot.game[message.guild.id]){
        for(i in bot.players){
        let player = message.guild.members.get(i);
        if(bot.players[i].role === "Investigator"){
            player.send(invEmbed);
    }
    };
    }
        else{
            message.channel.send(new Discord.RichEmbed().setTitle(`No L's game is currently underway !!`));
    }
};

module.exports.help = {
    name:"start"
}