const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
   if(bot.game[message.guild.id]){
    let x = Math.floor((Math.random() * 7) + 0);
    
    const roles = ["L", "Investigator", "Investigator", "Investigator","Investigator", "Kira", "Kira Worshipper"];
    const player = message.author;
    let id = message.guild.id;
    if(bot.players[id].playerId === player.id){
        return message.channel.send(new Discord.RichEmbed().setTitle(`You are already in the current L's game`));
    }
    if(x > roles.length) return;
    else{
    let playerRole = roles.splice(x, 1).toString;;
    
    bot.players[message.guild.id] = {
        playerId:player.id,
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
};

module.exports.help = {
    name:"join"
}