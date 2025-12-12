import type { VercelRequest, VercelResponse } from "@vercel/node";
import { setCorsHeaders, handleOptions } from "../utils/cors";

export default function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    handleOptions(res);
    return;
  }

  if (req.method === "DELETE") {
    // Serverless는 stateless - 실제 삭제는 클라이언트에서 처리
    res.status(204).send(null);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
