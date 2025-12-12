import type { VercelRequest, VercelResponse } from "@vercel/node";
import favorites from "../../data/production/favorites.json";
import { setCorsHeaders, handleOptions } from "../utils/cors";

export default function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    handleOptions(res);
    return;
  }

  if (req.method === "GET") {
    res.status(200).json(favorites);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
