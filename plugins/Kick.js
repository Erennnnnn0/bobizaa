import { areJidsSameUser } from "@adiwajshing/baileys";
      const res = await conn.groupParticipantsUpdate(m.chat, [user], "remove");
      kickedUser.concat(res);
      await delay(1 * 1000);
    }
  m.reply(
    `Telah Mengeluarkan Beban 🧸 ${kickedUser.map((v) => "@" + v.split("@")[0])}`,
    null,
    { mentions: kickedUser },
  );
};
handler.help = ["kick"];
handler.tags = ["group"];
handler.command = /^(kick)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
