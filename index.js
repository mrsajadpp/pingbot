const dotenv = require('dotenv');
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3009;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Discord bot setup
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('Discord bot is ready!');
    client.user.setActivity('with code!', { type: 'PLAYING' });
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);