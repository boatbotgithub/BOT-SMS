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

    const img = [
        "https://i.pinimg.com/originals/09/00/2a/09002a316abfb4f7b515d371ec192d74.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXKz081HRmpjOdxfPWuqnAzV8d77ONbG7bJ4JRh7CLjVFc402NCnIvZY6Ma2RVUtb-5U&usqp=CAU",
        "https://f.ptcdn.info/333/055/000/p1gt029f4UzXdJ7tJWR-o.gif",
        "https://f.ptcdn.info/334/055/000/p1gukg6i7aOXV2AZApm-o.gif"
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