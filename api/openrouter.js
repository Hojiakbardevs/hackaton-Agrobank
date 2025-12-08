// Vercel serverless function for OpenRouter proxy (JS version)
// Keeps API key on the server and avoids CORS issues.

const DEFAULT_SYSTEM =
  "Siz yordamchi AI asistentsiz. Javoblarni qisqa va aniq bering.";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OPENROUTER_API_KEY is missing" });
  }

  const { message, system } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  try {
    const upstream = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": req.headers.origin || "",
          "X-Title": "Agrobank Demo",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            { role: "system", content: system || DEFAULT_SYSTEM },
            { role: "user", content: message },
          ],
        }),
      }
    );

    const data = await upstream.json();
    if (!upstream.ok) {
      return res.status(upstream.status).json(data);
    }

    const reply = data?.choices?.[0]?.message?.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenRouter proxy error:", error);
    return res.status(500).json({ error: error?.message || "Unknown error" });
  }
}
