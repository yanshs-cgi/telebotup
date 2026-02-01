import { VercelRequest, VercelResponse } from "@vercel/node";
import { auth } from "./api/auth";
import { server } from "./server";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!auth(req, res)) return;

  await server(req.body);

  res.json({ success: true });
}
