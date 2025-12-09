import { OpenRouter } from "@openrouter/sdk";
import { SYSTEM_PROMPT } from "./knowledge";

export async function getAIResponse(userInput: string): Promise<string> {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    if (!apiKey) {
        return "OpenRouter API key topilmadi. Iltimos, .env faylida VITE_OPENROUTER_API_KEY ni qo'shing.";
    }

    try {
        // Create instance per request to avoid TS errors with defaultHeaders
        const openRouter = new OpenRouter({
            apiKey: apiKey,
        });

        const completion = await openRouter.chat.send({
            model: "openrouter/auto", // Auto-selects best model
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT,
                },
                {
                    role: "user",
                    content: userInput,
                },
            ],
            stream: false,
        });

        const reply = completion.choices?.[0]?.message?.content;
        if (!reply) {
            throw new Error("OpenRouter javob qaytarmadi");
        }

        // Type guard: ensure reply is string before calling trim
        const replyText = typeof reply === "string" ? reply : String(reply);
        return replyText.trim();
    } catch (error: any) {
        console.error("OpenRouter SDK error:", error);

        // Xatolar uchun aniq xabarlar
        if (error?.message?.includes("401") || error?.message?.includes("Unauthorized")) {
            return "API kalit noto'g'ri yoki muddati tugagan. Iltimos, yangi kalit yarating.";
        }
        if (error?.message?.includes("429") || error?.message?.includes("rate limit")) {
            return "So'rovlar soni ko'p. Iltimos, bir oz kuting.";
        }
        if (error?.message?.includes("quota") || error?.message?.includes("balance")) {
            return "OpenRouter hisobingizda mablag' yetarli emas. Iltimos, hisobni to'ldiring.";
        }

        return `Kechirasiz, AI javob bera olmadi. Tafsilot: ${error?.message || "noma'lum xato"}`;
    }
}