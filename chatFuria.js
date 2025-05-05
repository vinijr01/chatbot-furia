// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

const fs = require('fs');
const path = require('path');

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
    console.log('✅ Tudo certo! WhatsApp conectado.');
});
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms));


// Funil
client.on('message', async msg => {

    async function enviarSaudacao() {
        const chat = await msg.getChat();
    
        await chat.sendStateTyping(); // Digitação Simulada
        await delay(500); //Delay de 500 milisegundos mais conhecido como 3 segundos
    
        const mensagem = `🗯️ 1 - Como funciona\n🎮 2 - Próximos jogos\n💡 3 - Curiosidades FÚRIA\n📱 4 - Contato\n🙋 5 -  *Fan Art FURIA + Wallpapers Personalizados*`;
    
        await client.sendMessage(msg.from, mensagem);
    }

    // exceptions de mensagens fora do padrão
    async function tryMensagensForaMenu() {
        const chat = await msg.getChat();
    
        await delay(1000);
        await chat.sendStateTyping();
        await delay(1000);
        await client.sendMessage(msg.from, '❌ Desculpe, não entendi... \n\nPor favor, digite um dos números abaixo para continuar: ');
        await delay(1000);
        enviarSaudacao();

    }

    async function adicaoJogo1() {
        const chat = await msg.getChat();

        await client.sendMessage(msg.from, '🔔 Lembrete: *FURIA vs Liquid (CS2 - ESL Pro League)* é o próximo jogo!\n\n 📅 05/05/2025 19h30');
    }

    async function adicaoJogo2() {
        const chat = await msg.getChat();

        await client.sendMessage(msg.from, '🔔 Lembrete: *FURIA FC vs Ultimate Stars (Kings League)* está próximo!\n\n 📅 07/05/2025 21h00');
    }

    async function adicaoJogo3() {
        const chat = await msg.getChat();

        await client.sendMessage(msg.from, '🔔 Lembrete: *FURIA x Cloud9 (VALORANT Showmatch)* está logo ao lado!\n\n 📅 09/05/2025 09/05');
    }

    async function endGame() {
        const chat = await msg.getChat();

        await client.sendMessage(msg.from,
            `🗣 *FIM DE JOGO!*\n
            FURIA 16 x 11 Liquid\n
            🔥 Vitória gigante da tropa! Valeu pela torcida, família!
            💛🖤 Próximo desafio: 07/05 na Kings League!`
            );
            
    }

    if (msg.body.match(/(ei|eai|Ei|Eai|ajuda|menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|teste|ajuda|a)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); 
        await chat.sendStateTyping();
        await delay(3000); 
        const contact = await msg.getContact();
        const name = contact.pushname;

        const mensagem = 'Olá '+ name.split(" ")[0] +' do time Furioso! 🐾\nSou o assistente virtual da FURIA! Como posso te ajudar hoje?\n\nEscolha uma das opções:\n\n🗯️ 1 - Como funciona\n🎮 2 - Próximos jogos\n💡 3 - Curiosidades FÚRIA\n📱 4 - Contato\n🙋 5 - *Fan Art FURIA + Wallpapers Personalizados*'

        await client.sendMessage(msg.from, mensagem);

    }


    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000);
        await chat.sendStateTyping();
        await delay(1000);
        await client.sendMessage(msg.from, '🔥 *COMO FUNCIONA O BOT DA FÚRIA?*\n\nVocê está conversando com um bot feito especialmente para os fãs da FURIA!\nAqui você pode:\n- Ver os *próximos jogos* do time 🎮\n- Descobrir *curiosidades exclusivas* 🧠\n- Ter acesso direto aos nossos *canais oficiais* 📲\nVer *Wallpapaers Personalizados* da Furia 🎨 \n\nTudo isso de forma simples, rápida e pelo seu WhatsApp!\n\nQuer saber mais sobre a Fúria? Acesse: https://www.furia.gg/');

        await delay(3000);
        await client.sendMessage(msg.from, "Quer continuar? Digite uma das opções abaixo. 😉");
        enviarSaudacao();
    }

    if(msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping();
        await delay(1000);

        await client.sendMessage(msg.from, `📅 *PRÓXIMOS JOGOS DA FURIA:*\n
🔥 05/05 - FURIA vs Liquid (CS2 - ESL Pro League) - *19h30*
⚽ 07/05 - FURIA FC vs Ultimate Stars (Kings League) - *21h00*
🎮 09/05 - FURIA x Cloud9 (VALORANT Showmatch) - *18h00*\n\n
⚠️ *Os horários estão sujeitos a mudanças!* Fica de olho no nosso Insta: @furiagg`);

        await delay(3000);
        await client.sendMessage(msg.from, "Quer ver mais? Digite uma das opções abaixo. 👊");
        enviarSaudacao();
    }

    if(msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping();
        await delay(1000);

        await client.sendMessage(msg.from, '🐾 *CURIOSIDADE FURIOSA:*\n\nVocê sabia que o nome *FURIA* representa a *intensidade* e o *espírito de luta* dos jogadores?\n\nA organização foi criada em 2017 e já colocou o Brasil no topo do CS:GO mundial! 🌍💣');

        await delay(3000);
        await client.sendMessage(msg.from, "Curtiu? Digite uma das opções abaixo. 🤯");
        enviarSaudacao();
    }

    if(msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping();
        await delay(1000);

        await client.sendMessage(msg.from, '📲 *NOSSOS CANAIS OFICIAIS:*\n\nInstagram: https://instagram.com/furiagg\nTwitter: https://twitter.com/furiagg\nSite oficial: https://www.furia.gg');

        await delay(3000);
        await client.sendMessage(msg.from, "Estamos sempre online por lá! digite alguma opção abaixo para continuar. 💻");
        enviarSaudacao();
    }

    if(msg.body !== null && msg.body === "5" && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await chat.sendStateTyping();
        await delay(1000);

        await client.sendMessage(msg.from, `🎨 Aqui vão algumas artes exclusivas FURIA para você usar como *Wallpaper* ou compartilhar com seus *amigos!* 📸 \nMas antes, você gostaria de wallpapers para celular ou computador?`);
        await delay(2500);
        await client.sendMessage(msg.from, `📱 *6 - Celular*\n💻 *7 - Computador*`);

    }

    if(msg.body !== null && msg.body === "6" && msg.from.endsWith('@c.us')) {
        // imagens de celular
        const imagensJpeg = ["imagensCEL/STORIES4.jpg",
                            "imagensCEL/STORIES5.jpg",
                            "imagensCEL/Furia1.jpg",
                            "imagensCEL/STORIES1.jpg",
                            "imagensCEL/STORIES2.jpg",
                            "imagensCEL/STORIES3.jpg" ];

        for (const imagePath of imagensJpeg) {
            const extension = path.extname(imagePath).toLowerCase(); // pega extensão
            let mimeType;

            if (extension === '.png') {
                mimeType = 'image/png';
            } else if (extension === '.jpg' || extension === '.jpeg') {
                mimeType = 'image/jpeg';
            } else {
                console.log(`❌ Tipo de imagem não suportado: ${imagePath}`);
                continue;
            }

            const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
            const media = new MessageMedia(mimeType, imageBase64, path.basename(imagePath));
        
            await client.sendMessage(msg.from, media);
            await delay(4000); // pequena pausa entre os envios das imagens
        }

        await delay(3000);
        await client.sendMessage(msg.from, "Você pode ver muito mais dessas no nosso instagram! Acesse abaixo: 📸\n\nhttps://www.instagram.com/furiagg/ ");
        await delay(2000);
        await client.sendMessage(msg.from, "🤯 Maneiro demais, né?!\n\n Tem conhecimentos em design? *Mande pra gente* uma sua também pelo nosso instagram!\n🔥 https://www.instagram.com/furiagg/ 🔥");
        await client.sendMessage(msg.from, "Curtiu? Digite uma das opções para iteragir mais. 🤯");
        enviarSaudacao();

    }

    if(msg.body !== null && msg.body === "7" && msg.from.endsWith('@c.us')) {
        // imagens computador
        const imagensJpeg = ["imagensPC/WIDE1.jpg",
                            "imagensPC/WIDE2.jpg",
                            "imagensPC/WIDE3.jpg",
                            "imagensPC/WIDE4.jpg",
                            "imagensPC/WIDE5.jpg"];

        for (const imagePath of imagensJpeg) {
            const extension = path.extname(imagePath).toLowerCase();
            let mimeType;

            if (extension === '.png') {
                mimeType = 'image/png';
            } else if (extension === '.jpg' || extension === '.jpeg') {
                mimeType = 'image/jpeg';
            } else {
                console.log(`❌ Tipo de imagem não suportado: ${imagePath}`);
                continue;
            }

            const imageBase64 = fs.readFileSync(imagePath, { encoding: 'base64' });
            const media = new MessageMedia(mimeType, imageBase64, path.basename(imagePath));
        
            await client.sendMessage(msg.from, media);
            await delay(4000);
        }

        await delay(3000);
        await client.sendMessage(msg.from, "Você pode ver muito mais dessas no nosso instagram! Acesse abaixo: 📸\n\nhttps://www.instagram.com/furiagg/ ");
        await delay(2000);
        await client.sendMessage(msg.from, "🤯 Maneiro demais, né?!\n\n Tem conhecimentos em design? *Mande pra gente* uma sua também pelo nosso instagram!🎨\n🔥 https://www.instagram.com/furiagg/ 🔥");
        await client.sendMessage(msg.from, "Curtiu? Digite uma das opções para iteragir mais. 🤯");
        enviarSaudacao();
    }
        
    const mensagensEntrada = ['ei', 'eai', 'Ei', 'Eai', 'ajuda', 'menu', 'Menu', 'dia', 'tarde', 'noite', 'oi', 'Oi', 'Olá', 'olá', 'ola', 'Ola', 'teste', 'ajuda', 'a', '1', '2', '3', '4', '5', '6', '7'];

    if((msg.body !== '1' && msg.body !== '2' && msg.body !== '3' && msg.body !== '4' && msg.body !== '5' && msg.body !== '6' && msg.body !== '7' && msg.body !== mensagensEntrada) && msg.from.endsWith('@c.us')) {
        tryMensagensForaMenu();
    }

    const delayMsg = 130000
    while(msg.body !== null) {
        await delay(delayMsg);
        adicaoJogo1()
        break
    }
    
});

