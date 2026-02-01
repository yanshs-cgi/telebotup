import { VercelRequest, VercelResponse } from "@vercel/node";
import { auth } from "./api/auth";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (!auth(req, res)) return;

  res.json({
    success: true,
    message: "API connected",
    status: "online"
  });
}
