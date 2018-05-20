const RemClient = require('./client/RemClient');
const config = require('./config.json');

const client = new RemClient({
    token: config.tokens.Discord,
    clientOptions: {
        maxShards: 'auto',
        disableEveryone: true,
        autoReconnect: true,
        getAllUsers: true,
        defaultImageFormat: 'png'
    }
});

client.start();

process.on('unhandledRejection', (err) => {
    console.log(`An unhandledRejection has occured:\n${err.stack}`);
});