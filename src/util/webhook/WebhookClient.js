class WebhookClient {
    constructor(options = {}) {
        this._id = options._id;
        this._token = options._token;
        this._discordURL = `https://discordapp.com/api/webhooks/${this._id}/${this._token}?wait=true`;
        this.snek = require('snekfetch');
    }

    send(content) {
        if (content instanceof Object) { // If it is an embed.
            this.snek
                .post(this._discordURL)
                .send({
                    embeds: [
                        content
                    ]
                })
                .end();
        } else { // If it is a string.
            this.snek
                .post(this._discordURL)
                .send({
                    content
                })
                .end();
        }
    }
}

module.exports = WebhookClient;