module.exports = (bot) => {
    bot.on('disconnect', () => {
        console.log('All shards has disconnected! Reconnecting...');
    });
}