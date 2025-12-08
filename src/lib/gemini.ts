// Wrapper that forwards to OpenAI implementation so we have a single code path.
export const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
        const { getAIResponse: getOpenAIResponse } = await import("./openai");
        return await getOpenAIResponse(userMessage);
    } catch (error) {
        console.error("OpenAI Error:", error);
        return "Kechirasiz, tizimda vaqtincha nosozlik yuz berdi. Iltimos, birozdan so'ng qayta urinib ko'ring.";
    }
};
