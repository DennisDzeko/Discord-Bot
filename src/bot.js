require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE','REACTION']
});
const PREFIX = "$";

client.on('ready',() => {
    console.log(`${client.user.username} has logged in.`);
});

/* client.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
}); */

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        console.log(CMD_NAME);
        console.log(args);
    }
    console.log(`[${message.author.tag}]: ${message.content}`);
        
    if (message.content === 'halk') {
        message.channel.send(`Benim Türkiye halkına karşı pek bir saygım yoktur, bunu bilsinler!`)}
    if (message.content === 'TRT') {
        message.channel.send(`Ne varsa satacağız, bu TRT'yi de satacağız bunu bilin, bu TRT'yi de!`)}
    if (message.content === 'Ankara') {
        message.channel.send(`Bu Ankara dediğiniz yer allahın belası bir yerdir, topluca atsak ülkeden, uzaya göndersek Türkiye hiçbir şey kaybetmez, kazanır!`)}
    if (message.content === 'hizmet') {
        message.channel.send(`Biz halka hizmet etmeyeceğiz, kimse hizmet falan beklemesin!`)}
    if (message.content === 'bardak') {
        message.channel.send(`Şu bardak...`)}
    if (message.content === 'liberal') {
        message.channel.send(`AH-HAH-HAH-HAH-AH-HAH!`)}
    if (message.content === 'seçim') {
        message.channel.send(`https://www.youtube.com/watch?v=0xHQt8HtWQ0&ab_channel=%C4%B0lkay`)}
    if (message.content === 'hos geldiniz Besim Bey') {
        message.channel.send(`SATACA- Hoş bulduk.`)}

/*     if (CMD_NAME === 'kick') {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply('You do not have permissions to use that command');
        if (args.length === 0)
            return message.reply('Please provide an ID');
        const member = message.guild.members.cache.get(args[0]);
        if (member) {
            member
            .kick()
            .then((member) => message.channel.send(`${member} was kicked.`))
            .catch((err) => message.channel.send('I can not kick that user :('));
        } else {
            message.channel.send('That member was not found');
        }
    } else if (CMD_NAME === 'ban') {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply('You do not have permissions to use that command');
        if (args.length === 0) return message.reply('Please provide an ID');

        try {
            const user = await.message.guild.members.ban(args[0]);
            message.channel.send(`${member} was banned.`);
        } catch (err) {
            console.log(err);
            message.channel.send('An error occured. Either I do not have permissions or the user was not found.')
        }
    }
});

client.on('messageReactionAdd',(reaction,user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === 'ID of the message reactions will work on') {
        switch(name) {
            case 'reactionemoji 1 here':
                member.roles.add('assigned role for emoji 1');
                break;
            case 'reactionemoji 2 here':
                member.roles.add('assigned role for emoji 2');
                break;
            case 'reactionemoji 3 here':
                member.roles.add('assigned role for emoji 3');
                break;
            case 'reactionemoji 4 here':
                member.roles.add('assigned role for emoji 4');
                break;
        }
    }
});

client.on('messageReactionRemove',(reaction,user) => {
    console.log('It worked!')
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === 'ID of the message reactions will work on') {
        switch(name) {
            case 'reactionemoji 1 here':
                member.roles.remove('assigned role for emoji 1');
                break;
            case 'reactionemoji 2 here':
                member.roles.remove('assigned role for emoji 2');
                break;
            case 'reactionemoji 3 here':
                member.roles.remove('assigned role for emoji 3');
                break;
            case 'reactionemoji 4 here':
                member.roles.remove('assigned role for emoji 4');
                break;
        }
    } */
});

client.login(process.env.DISCORDJS_BOT_TOKEN);