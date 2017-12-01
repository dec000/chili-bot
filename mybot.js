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

// !chili!dance
case 'chili!dance':
       bot.sendMessage({
            to: channelID,
            message: 'No way!'
          });
  break;

      // chili!help
      case 'ping':
      bot.sendMessage({
           to: channelID,
           message: 'chili!dance, chili!Hi, chili!love, chili!heart'
         });
 break;

     // chili!love
     case 'ping':
     bot.sendMessage({
          to: channelID,
          message: ':heart: :hot_pepper: :heart:'
        });
break;

    // chili!heart
    case 'ping':
    bot.sendMessage({
         to: channelID,
         message: ':ChiliNut: + :Cappy: = :ChiliNut: :heart: :BananaNutCream:'
       });
break;
client.login("Mzg2MTc1NTUzMjA5ODkyODc2.DQMLIw.5p_cWVH__rm_0dylRomEa-S1tf8");
