import { VercelRequest, VercelResponse } from "@vercel/node";

export function auth(req: VercelRequest, res: VercelResponse): boolean {
  const key = req.query.apikey;

  if (key !== process.env.API_KEY) {
    res.status(403).json({ success: false, message: "apikey invalid" });
    return false;
  }

  if (req.query.logout === "true") {
    res.json({ success: true, message: "logout success" });
    return false;
  }

  return true;
}
