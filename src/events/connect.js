module.exports = (bot) => {
    bot.on('connect', (id) => {
        console.log(`[Shard #${id}] Connecting...`);
    });
}