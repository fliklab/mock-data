import type { VercelRequest, VercelResponse } from "@vercel/node";
import servicesKo from "../data/production/services/ko.json";
import servicesEn from "../data/production/services/en.json";
import { setCorsHeaders, handleOptions } from "./utils/cors";

const data: Record<string, typeof servicesKo> = {
  ko: servicesKo,
  en: servicesEn,
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
  const services = data[language] || data.en;

  res.status(200).json(services);
}
