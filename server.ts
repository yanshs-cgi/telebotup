import { showMenu, handleMenu } from "./menu";

export async function server(token: string, update: any) {
  const text = update.message?.text;

  if (text === "/menu" || text === ".menu") {
    return showMenu(token, update.message.chat.id);
  }

  if (update.callback_query) {
    const chatId = update.callback_query.message.chat.id;
    return handleMenu(token, chatId, update.callback_query.data);
  }
}
