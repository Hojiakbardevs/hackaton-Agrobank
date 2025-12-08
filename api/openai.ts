import type { VercelRequest, VercelResponse } from "@vercel/node";

// Serverless proxy to OpenAI to avoid exposing the API key in the browser and to bypass CORS.
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        return res
            .status(500)
            .json({ error: "OPENAI_API_KEY is missing on the server." });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const body = req.body;

        const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        });

        const data = await upstream.json();

        if (!upstream.ok) {
            return res.status(upstream.status).json(data);
        }

        return res.status(200).json(data);
    } catch (error: any) {
        console.error("Proxy error:", error);
        return res.status(500).json({ error: error?.message || "Unknown error" });
    }
}
