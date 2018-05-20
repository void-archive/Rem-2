module.exports = (bot) => {
    bot.on('ready', () => {
        console.log(`${bot.user.username}: Connected to Discord~`);
        for (const shard of bot.shards.map(s => s)) {
            bot.editStatus('online', {
                name: `with Shard #${shard.id} | ${bot.config.prefix}help`,
                type: 0
            });
        }
        bot.webhook.send({
            title: 'Rem | Loaded!',
            description: 'Rem has loaded~',
            color: bot.utils.color
        });
    });
}