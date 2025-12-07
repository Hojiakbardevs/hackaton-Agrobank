import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./knowledge";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function getAIResponse(userInput: string): Promise<string> {
    if (!OPENAI_API_KEY) {
        console.error("OpenAI API key not found");
        return "Kechirasiz, AI xizmat hozirda mavjud emas. Iltimos, keyinroq urinib ko'ring.";
    }

    try {
        // OpenAI SDK yordamida to'g'ri chaqirish
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY,
            dangerouslyAllowBrowser: true, // ⚠️ Faqat demo uchun! Production uchun backend kerak
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
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
            temperature: 0.7,
            max_tokens: 1000,
        });

        const responseText = completion.choices[0]?.message?.content;

        if (!responseText) {
            throw new Error("No response from OpenAI");
        }

        return responseText.trim();
    } catch (error: any) {
        console.error("Error calling OpenAI API:", error);

        // Xatolar uchun aniq xabarlar
        if (error?.status === 401) {
            return "Kechirasiz, API kalit noto'g'ri yoki muddati tugagan. Iltimos, yangi kalit yarating.";
        } else if (error?.status === 429) {
            return "Kechirasiz, so'rovlar soni ko'p. Iltimos, bir oz kuting.";
        } else if (error?.status === 500) {
            return "Kechirasiz, server xatosi. Iltimos, keyinroq urinib ko'ring.";
        }

        return "Kechirasiz, javob olishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.";
    }
}
