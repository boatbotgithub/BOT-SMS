const { Client, Intents ,WebhookClient , MessageEmbed } = require('discord.js');
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_EMOJIS_AND_STICKERS',
        'GUILD_INTEGRATIONS',
        'GUILD_WEBHOOKS',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING'
    ],
    partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER"],
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
})

client.on('ready', () => {
  console.log(`Logged in ${client.user.tag}!`);
});

client.on('message', async message => {
    const chanelContents = client.channels.cache.find(channel => channel.id =='923910842263683072');
    const contents = message.content
    if(contents.length >= 150) return message.reply("ข้อความยากเกินไป")
    const img = [
        "https://cdn.discordapp.com/attachments/884013105452032050/924216997020057600/HP-Xmas00.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217019178577940/HP-Xmas01.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217043958509608/HP-Xmas02.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217069300490250/HP-Xmas03.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217085582790726/HP-Xmas04.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217117757308928/HP-Xmas05.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217138481352764/HP-Xmas06.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217149646581760/HP-Xmas07.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217174917255188/HP-Xmas08.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217192910839858/HP-Xmas09.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217219318165514/HP-Xmas10.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217232471490600/HP-Xmas11.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217243821297724/HP-Xmas12.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217294752735262/HP-Xmas13.png",
        "https://cdn.discordapp.com/attachments/884013105452032050/924217320241508362/HP-Xmas14.png"
       
    ]

    var item = img[Math.floor(Math.random()* img.length)];


    if(message.author.bot) return;
    message.delete()
    await chanelContents.send({
        embeds:[new MessageEmbed() 
        .setColor('#01e0c5')
        .setAuthor('คำอวยพร') 
        .setDescription(`**คำอวยพร**\n${contents}`) 
        .setFooter(`คำอวยพร โดย ${message.author.username}`).setTimestamp()
        .setImage(item)
    ]})

})
client.login();