import { VercelRequest, VercelResponse } from "@vercel/node";
import { auth } from "./api/auth";
import { server } from "./server";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.query.token as string;
  if (!token) {
    return res.status(400).json({ success: false, message: "token required" });
  }

  const a = auth(req, res);
  if (!a.ok) {
    return res.json({ success: true, message: "logout" });
  }

  await server(token, req.body);
  res.json({ success: true });
}
