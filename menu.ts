const API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

async function send(chatId: number, text: string, keyboard?: any) {
  await fetch(`${API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      reply_markup: keyboard,
      parse_mode: "Markdown"
    })
  });
}

export async function menuMain(chatId: number) {
  await send(chatId, "📌 *Menu Utama*", {
    inline_keyboard: [
      [{ text: "👥 Menu Grup", callback_data: "grup" }],
      [{ text: "📚 Menu Belajar", callback_data: "belajar" }],
      [{ text: "🎮 Menu Game", callback_data: "game" }]
    ]
  });
}

export async function menuHandler(chatId: number, data: string) {
  if (data === "grup") {
    await send(chatId, "👥 Fitur Grup:\n- kick\n- warn\n- tagall");
  }
  if (data === "belajar") {
    await send(chatId, "📚 Belajar:\n- fisika\n- filsafat\n- kosmos");
  }
  if (data === "game") {
    await send(chatId, "🎮 Game:\n- quiz\n- tebak angka");
  }
}
