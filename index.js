const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
   console.og('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
   if (msg.content === 'Re') {
    msg.reply('Salut!');
   }
});

client.login('NzAwMDgyNzU1NTM0NDU0Nzk0.XpdyMA.8mslDPr1192KqCFNU4OygKlSs00');
