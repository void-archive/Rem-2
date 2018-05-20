module.exports = {
    name: 'test',
    desc: 'A test.',
    syntax: 'test [...args]',
    aliases: [
        'debug'
    ],
    execute: (client, msg, args) => {
        if (!args[0]) return msg.channel.createMessage('no u');
        return msg.channel.createMessage(args.join(" "));
    }
};