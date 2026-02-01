import { menuMain, menuHandler } from "./menu";

export async function server(update: any) {
  if (update.message?.text === ".menu") {
    return menuMain(update.message.chat.id);
  }

  if (update.callback_query) {
    const chatId = update.callback_query.message.chat.id;
    return menuHandler(chatId, update.callback_query.data);
  }
}
