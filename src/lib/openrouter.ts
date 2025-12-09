import { OpenRouter } from "@openrouter/sdk";
import { SYSTEM_PROMPT } from "./knowledge";

// OpenRouter SDK instance with API key from env
const openRouter = new OpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY || "",
    defaultHeaders: {
        "HTTP-Referer": "https://hackaton-agrobank.vercel.app",
        "X-Title": "AI Muhofiz - Agrobank Demo",
    },
});

export async function getAIResponse(userInput: string): Promise<string> {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    if (!apiKey) {
        return "OpenRouter API key topilmadi. Iltimos, .env faylida VITE_OPENROUTER_API_KEY ni qo'shing.";
    }

    try {
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

        return reply.trim();
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