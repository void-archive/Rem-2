module.exports = (bot) => {
    bot.on('shardResume', (id) => {
        console.log(`[Shard #${id}] Shard has resumed.`);
    });
}