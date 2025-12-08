import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./knowledge";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// Browserda bo'lsa, avtomatik "/api/openai" proxyni ishlatamiz; env bilan override qilish mumkin.
const defaultBaseUrl =
    typeof window !== "undefined" ? "/api/openai" : undefined;
const OPENAI_BASE_URL = import.meta.env.VITE_OPENAI_BASE_URL || defaultBaseUrl;
// Default to gpt-4.1; allow override via env
const MODEL = import.meta.env.VITE_OPENAI_MODEL || "gpt-4.1";

export async function getAIResponse(userInput: string): Promise<string> {
    if (!OPENAI_API_KEY) {
        console.error("OpenAI API key not found");
        return "Kechirasiz, AI xizmat hozirda mavjud emas. Iltimos, VITE_OPENAI_API_KEY ni .env ga qo'shing.";
    }

    try {
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY,
            baseURL: OPENAI_BASE_URL || undefined,
            dangerouslyAllowBrowser: true, // ⚠️ Demo uchun. Production: backend orqali chaqiring.
        });

        const completion = await openai.chat.completions.create({
            model: MODEL,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userInput },
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const responseText = completion.choices[0]?.message?.content;
        if (!responseText) throw new Error("No response from OpenAI");
        return responseText.trim();
    } catch (error: any) {
        console.error("Error calling OpenAI API:", error);

        if (error?.status === 401) {
            return "Kechirasiz, API kalit noto'g'ri yoki muddati tugagan. Iltimos, yangi kalit yarating.";
        }
        if (error?.status === 429) {
            return "Kechirasiz, so'rovlar soni ko'p. Iltimos, bir oz kuting.";
        }
        if (error?.status === 500) {
            return "Kechirasiz, server xatosi. Iltimos, keyinroq urinib ko'ring.";
        }

        // CORS yoki tarmoq xatolari uchun aniqroq javob
        if (error?.message?.includes("Failed to fetch") || error?.name === "TypeError") {
            return "CORS yoki tarmoq xatosi. Iltimos, so'rovni backend orqali proxylang yoki VITE_OPENAI_BASE_URL ni sozlang.";
        }

        return `Kechirasiz, javob olishda xatolik yuz berdi. Tafsilot: ${error?.message || "noma'lum xato"}.`;
    }
}
