const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("chili!Hi")) {
    message.channel.send("Hello. :hot_pepper:");
  }
});

client.login("Mzg2MTc1NTUzMjA5ODkyODc2.DQMLIw.5p_cWVH__rm_0dylRomEa-S1tf8");
