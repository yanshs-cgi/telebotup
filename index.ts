import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (!req.query.token) {
    return res.status(400).json({ success: false, message: "token required" });
  }

  res.json({
    success: true,
    message: "API connected",
    token_active: true
  });
}
