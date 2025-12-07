import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "@/lib/knowledge";
// Knowledge faylingizni to'g'ri joylashganiga ishonch hosil qiling

interface Message {
  id: number;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

const GeminiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "model",
      content:
        "Assalomu alaykum! 👋 Men AI Muhofiz loyihasi bo'yicha AI yordamchiman. Loyiha haqida istalgan savolingizni bering.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Google Gemini API key - .env faylidan olinadi
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);

      // Modelni chaqirish
      const model = genAI.getGenerativeModel({
        model: "gemini-pro", // To'g'ri model nomi
      });

      // Chat tarixini shakllantirish
      const history = messages
        .slice(1) // Birinchi salomni o'tkazib yuboramiz
        .map((msg) => ({
          role: msg.role === "model" ? "model" : "user",
          parts: [{ text: msg.content }],
        }));

      const chat = model.startChat({
        history: history,
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      // Birinchi xabar bo'lsa, SYSTEM_PROMPT bilan birga yuborish
      const messageToSend =
        history.length === 0
          ? `${SYSTEM_PROMPT}\n\nFoydalanuvchi savoli: ${input}`
          : input;

      const result = await chat.sendMessage(messageToSend);
      const response = await result.response;
      const botText = response.text();

      const botMessage: Message = {
        id: messages.length + 2,
        role: "model",
        content: botText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error("Gemini API Error:", err);

      // Aniqroq xato xabari
      let errorMsg = "Kechirasiz, xatolik yuz berdi.";
      if (err.message?.includes("404")) {
        errorMsg =
          "Model topilmadi (404). Iltimos, npm install @google/generative-ai@latest qiling.";
      } else if (err.message?.includes("API key")) {
        errorMsg = "API kalit noto'g'ri.";
      }

      setError(errorMsg);

      const errorMessage: Message = {
        id: messages.length + 2,
        role: "model",
        content:
          "Texnik nosozlik tufayli javob bera olmadim. Qayta urinib ko'ring.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickQuestions = [
    "Loyiha nima haqida?",
    "Xavf darajasi qanday aniqlanadi?",
    "Offline rejim bormi?",
    "API qanday ishlaydi?",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-900/80 to-blue-900/80 p-4 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold flex items-center gap-2">
              AI Muhofiz Assistant
              <Bot className="w-4 h-4 text-emerald-300" />
            </h3>
            <p className="text-emerald-400 text-xs flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Online - Google Gemini Pro
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-950/50">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-emerald-600 text-white"
              }`}>
              {message.role === "user" ? <User size={16} /> : <Bot size={16} />}
            </div>

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 border border-gray-700 text-gray-200"
              }`}>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <span className="text-[10px] opacity-50 mt-1 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-gray-800 rounded-2xl px-4 py-3 border border-gray-700">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="px-4 py-2 bg-red-900/50 border-t border-red-800 flex items-center gap-2 text-red-200 text-sm">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-4 py-2 bg-gray-900 border-t border-gray-800 flex gap-2 overflow-x-auto">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => setInput(q)}
            className="whitespace-nowrap px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-xs text-gray-300 transition-colors">
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-900 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isTyping && sendMessage()}
            placeholder="Savolingizni yozing..."
            className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-500 placeholder-gray-500"
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-4 rounded-xl transition-colors flex items-center justify-center">
            {isTyping ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChatbot;
