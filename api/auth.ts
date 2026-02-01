import { VercelRequest, VercelResponse } from "@vercel/node";

export function auth(req: VercelRequest, res: VercelResponse) {
  if (req.query.logout === "true") {
    return { ok: false, logout: true };
  }
  return { ok: true };
}
