import { SYSTEM_PROMPT } from "./knowledge";

const API_BASE = import.meta.env.VITE_OPENROUTER_PROXY || "/api/openrouter";

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
