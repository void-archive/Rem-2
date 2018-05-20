module.exports = (bot) => {
    bot.on('error', (err, id) => {
        console.error(`[Shard #${id}]\n${err.stack}`);
    });
}