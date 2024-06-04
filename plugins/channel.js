let handler = async (m, { conn }) => {

m.reply(`\n
`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
