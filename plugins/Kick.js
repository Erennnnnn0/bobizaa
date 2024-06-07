import { areJidsSameUser } from "@adiwajshing/baileys";
let handler = async (m, { conn, participants, isOwner }) => {
  let usr = m.quoted ? [m.quoted.sender] : m.mentionedJid;
  let users = usr.filter((u) => !areJidsSameUser(u, conn.user.id));
  if (!(m.quoted || m.mentionedJid[0]))
    return m.reply("Tag atau reply orang yang mau dikick!");
  let kickedUser = [];
  for (let user of users)
    if (
      user.endsWith("@s.whatsapp.net") &&
      !(
        participants.find((v) => areJidsSameUser(v.id, user)) || { admin: true }
      ).admin
    ) {
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body.startsWith('!kick ')) {
        const mentioned = msg.mentionedIds[0];
        
        if (msg.from.includes('@g.us')) {
            const chat = await msg.getChat();

            if (chat.isGroup) {
                const participants = await chat.participants;
                const sender = participants.find(p => p.id._serialized === msg.author);

                if (sender.isAdmin) {
                    const user = participants.find(p => p.id._serialized === mentioned);
                    if (user) {
                        await chat.removeParticipants([mentioned]);
                        msg.reply(`User ${mentioned} has been removed from the group.`);
                    } else {
                        msg.reply('User is not in the group.');
                    }
                } else {
                    msg.reply('You need to be an admin to kick members.');
                }
            }
        } else {
            msg.reply('This command can only be used in groups.');
        }
    }
});

client.initialize();
