module.exports = (bot) => {
    bot.on('guildDelete', (guild) => {
        bot.webhook.send({
            title: 'Rem | Left Guild',
            description: `<:RemEhehe:447279660867387412> Aww, I left a guild... :< (Now at **\`${bot.guilds.size}\`** guilds.)`,
            fields: [{
                name: 'Guild Name (ID)',
                value: `**\`${guild.name}\`** (\`${guild.id}\`)`,
                inline: true
            },
            {
                name: "Shard",
                value: `**Shard #${guild.shard.id}**`,
                inline: true
            },
            {
                name: "Members / Bots",
                value: `**\`${members}/${bots}\`**`,
                inline: true
            }],
            color: bot.utils.color
        });
    });
}