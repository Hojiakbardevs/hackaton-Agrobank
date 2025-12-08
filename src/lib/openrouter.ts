import { SYSTEM_PROMPT } from "./knowledge";

// Proxy endpoint (serverless). In dev, set VITE_OPENROUTER_PROXY to your running backend,
// e.g. http://localhost:3000/api/openrouter when using `vercel dev`.
const API_BASE =
    import.meta.env.VITE_OPENROUTER_PROXY ||
    (typeof window !== "undefined"
        ? `${window.location.origin}/api/openrouter`
        : "/api/openrouter");

export async function getAIResponse(userInput: string): Promise<string> {
    try {
        const res = await fetch(API_BASE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userInput, system: SYSTEM_PROMPT }),
        });

        if (!res.ok) {
            const text = await res.text();
            if (res.status === 404) {
                throw new Error(
                    "404: /api/openrouter topilmadi. Devda `vercel dev` bilan backendni ishga tushiring yoki VITE_OPENROUTER_PROXY ni backend URL ga sozlang."
                );
            }
            throw new Error(`Upstream error (${res.status}): ${text}`);
        }

        const data = await res.json();
        const reply = data?.reply;
        if (!reply) throw new Error("Empty reply from OpenRouter");
        return reply.trim();
    } catch (error: any) {
        console.error("OpenRouter fetch error:", error);
        return (
            "Kechirasiz, AI javob bera olmadi. Keyinroq urinib ko'ring yoki administratorga xabar bering. Tafsilot: " +
            (error?.message || "noma'lum xato")
        );
    }
}
