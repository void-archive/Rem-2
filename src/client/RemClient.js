const Eris = require('eris').Client;
const WebhookService = require('../util/webhook/WebhookClient');
const fs = require('fs');

class RemClient extends Eris {
    constructor(options = {}) {
        super(options.token, options.clientOptions);

        this.cmds = [];
        this.aliases = [];
        this.config = require('../config.json');
        this.webhook = new WebhookService({
            _id: this.config.webhook.ID,
            _token: this.config.webhook.TOKEN
        });
        this.messages = 0;
        this.commandsExecuted = 0;
        this.utils = require('../util/Util');
    }

    async start() {
        this.init();
        this.connect().then(() => console.log('[WebSocket] Rem is being connected via WebSocket.'));
    }

    async init() {
        console.log('[Booting...] Rem is currently loading commands and events!');
        const categories = await fs.readdirSync('./commands');

        for (let i = 0; i < categories.length; i++) {
            fs.readdir(`./commands/${categories[i]}`, (err, files) => {
                if (err) throw err;
                console.log(`[${categories[i]}] Loading ${files.length} commands~`);
                files.forEach(f => {
                    try {
                        const cmd = require(`../commands/${categories[i]}/${f}`);

                        if (!cmd.aliases) return;
    
                        this.cmds.push(cmd);
                        cmd.aliases.forEach(a => this.aliases.push(a));
                    } catch(e) {
                        throw e;
                    }
                });
            });
        }

        fs.readdir('./events', (err, files) => {
            if (err) throw err;
            console.log(`[Events] Loading ${files.length} events`);
            files.forEach(f => {
                const event = require('../events/' + f);

                event(this);
            });
        });
    }
}

module.exports = RemClient;