// Owner only cmd
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    if(message.author.id === "477758607857942529"){
    bot.destroy();
    }
};

module.exports.help = {
    name:"destroy"
}