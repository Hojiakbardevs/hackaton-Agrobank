import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "./knowledge";

// Initialize the API with the key from environment variables
// Note: In Vite, env variables must start with VITE_
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("VITE_GEMINI_API_KEY is missing in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const getAIResponse = async (userMessage: string): Promise<string> => {
    if (!API_KEY) {
        return "Tizimda xatolik: API kaliti topilmadi. Iltimos administratorga murojaat qiling.";
    }

    try {
        const result = await model.generateContent([
            SYSTEM_PROMPT,
            `Foydalanuvchi savoli: ${userMessage}`
        ]);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Kechirasiz, tizimda vaqtincha nosozlik yuz berdi. Iltimos, birozdan so'ng qayta urinib ko'ring.";
    }
};
