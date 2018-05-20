module.exports = (bot) => {
    bot.on('guildCreate', (guild) => {
        let members = guild.members.filter(m => !m.bot).length;
        let bots = guild.member.filter(m => !m.bot).length;

        if (bots > members && bots > 20 && !bot.config.whitelistedGuilds.includes(guild.id)) {
            guild.leave();
            console.log(`[Shard #${guild.shard.id}] Left ${guild.name} | Reason: Bot List`);
        }

        bot.webhook.send({
            title: 'Rem | Joined Guild',
            description: `<:RemEhehe:447279660867387412> I have joined a guild. (Now at **\`${bot.guilds.size}\`** guilds~)`,
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