const TelegramBot = require('node-telegram-bot-api')
// const { chaveAPI } = require('./dadosPrivados.js');


const token = '7972634985:AAEAgwNEfMVpvrc-1JuvR3tXddnaUtN_E74'

const bot = new TelegramBot(token, {polling: true});

console.log("All Right! WhatsApp conected.")

bot.on('message', (msg) => {
    const chatID = msg.chat.id;
    const userMessage = msg.text.toLowerCase();

    if (userMessage.includes('oi') || userMessage.includes('olá')) {
        bot.sendMessage(chatID, 'Olá! Como posso te ajudar?');
    } else {
        bot.sendMessage(chatID, `Você disse: "${msg.text}"`);
    }

});