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
      const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_kick2

  if (!global.db.data.settings[conn.user.jid].restrict) throw`${tradutor.texto1[0]} (𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝 / 𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) ${tradutor.texto1[1]}`;
  const kicktext = `${tradutor.texto2} \n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
