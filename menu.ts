export async function send(token: string, chatId: number, text: string, keyboard?: any) {
  const API = `https://api.telegram.org/bot${token}`;
  await fetch(`${API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      reply_markup: keyboard
    })
  });
}

export async function showMenu(token: string, chatId: number) {
  await send(token, chatId, "Menu Utama", {
    inline_keyboard: [
      [{ text: "Menu Grup", callback_data: "grup" }],
      [{ text: "Menu Belajar", callback_data: "belajar" }],
      [{ text: "Menu Game", callback_data: "game" }]
    ]
  });
}

export async function handleMenu(token: string, chatId: number, data: string) {
  if (data === "grup") return send(token, chatId, "Menu Grup");
  if (data === "belajar") return send(token, chatId, "Menu Belajar");
  if (data === "game") return send(token, chatId, "Menu Game");
}
