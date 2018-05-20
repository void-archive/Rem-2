module.exports = (bot) => {
    bot.on('messageCreate', async(msg) => {
        bot.messages++;
        if (!bot.ready || msg.author.bot) return;

        let prefix = new RegExp(`^<@!?${bot.user.id}> |^${bot.config.prefix.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}|^${'!r.'.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`)
            .exec(msg.content);

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift();
        let cmd = bot.cmds.find((c) => c.name.includes(command) || c.aliases.includes(command));

        try {
            bot.commandsExecuted++;
            await cmd.execute(bot, msg, args);
        } catch(err) {
            msg.channel.createMessage(`<:RemNooooooo:447279660372590632> | An error has occured while executing **\`${cmd.name}\`**:\n\`\`\`js\n${err.stack}\`\`\`\nIf the command keeps being a fuss, please report it to <@280158289667555328> at **<https://discord.gg/gzPtR34>**`);
        }
    });
}