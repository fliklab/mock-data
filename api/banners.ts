import type { VercelRequest, VercelResponse } from "@vercel/node";
import bannersKo from "../data/production/banners/ko.json";
import bannersEn from "../data/production/banners/en.json";
import { setCorsHeaders, handleOptions } from "./utils/cors";

const data: Record<string, typeof bannersKo> = {
  ko: bannersKo,
  en: bannersEn,
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    handleOptions(res);
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const language = (req.query.language as string) || "en";
  const banners = data[language] || data.en;

  res.status(200).json(banners);
}
