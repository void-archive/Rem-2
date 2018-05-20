module.exports = (bot) => {
    bot.on('shardDisconnect', (id) => {
        console.log(`[Shard #${id}] Shard has disconnected, reconnecting...`);
    });
}