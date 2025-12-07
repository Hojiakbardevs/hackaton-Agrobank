import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { getAIResponse } from "../../lib/openai";
import {
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { useTheme } from "../theme-provider";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const DemoChatbot = () => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content:
        "Assalomu alaykum! 👋 Men AI Muhofiz loyihasi bo'yicha savollaringizga javob beraman. Quyidagi savollardan birini tanlang yoki o'zingiz so'rang!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined Q&A (Rule-based chatbot) - REMOVED/COMMENTED FOR DYNAMIC AI
  // const qaDatabase: { [key: string]: string } = { ... }

  /*
  const findAnswer = (question: string): string => {
    // ... (old logic)
    return "..."
  };
  */

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input; // Save input before clearing
    setInput("");
    setIsTyping(true);

    try {
      const responseText = await getAIResponse(currentInput);

      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: "Kechirasiz, xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickQuestions = [
    "Loyihangiz nima qiladi?",
    "Mahsulot kimlar uchun?",
    "Qanday ishlaydi?",
    "Qanday texnologiyalar ishlatilgan?",
    "AI qanday foydalanadi?",
    "API haqida",
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto">
      {/* Header */}
      <div
        className={`border rounded-t-2xl p-4 ${
          theme === "dark"
            ? "bg-gray-900/50 border-gray-800"
            : "bg-white border-gray-200"
        }`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3
              className={`text-lg font-semibold flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              AI Muhofiz Chatbot
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </h3>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
              Loyiha haqida savollar uchun
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className={`border-x h-[400px] overflow-y-auto p-4 space-y-4 ${
          theme === "dark"
            ? "bg-gray-950/50 border-gray-800"
            : "bg-gray-50 border-gray-200"
        }`}>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${
              message.type === "user" ? "flex-row-reverse" : ""
            }`}>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                message.type === "user"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-emerald-500/20 text-emerald-400"
              }`}>
              {message.type === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.type === "user"
                  ? theme === "dark"
                    ? "bg-blue-500/20 text-white"
                    : "bg-blue-100 text-gray-900"
                  : theme === "dark"
                  ? "bg-gray-800/50 text-gray-200"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {message.content}
              </p>
              <span
                className={`text-[10px] mt-1 block ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}>
                {message.timestamp.toLocaleTimeString("uz-UZ", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-emerald-400" />
            </div>
            <div
              className={`rounded-2xl px-4 py-3 ${
                theme === "dark"
                  ? "bg-gray-800/50"
                  : "bg-white border border-gray-200"
              }`}>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div
        className={`border-x px-4 py-3 ${
          theme === "dark"
            ? "bg-gray-900/30 border-gray-800"
            : "bg-gray-50 border-gray-200"
        }`}>
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle
            className={`w-4 h-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <span
            className={`text-xs ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
            Tez savollar:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleQuickQuestion(q)}
              className={`px-3 py-1.5 border rounded-lg text-xs transition-colors ${
                theme === "dark"
                  ? "bg-gray-800/50 hover:bg-gray-800 border-gray-700 text-gray-300"
                  : "bg-white hover:bg-gray-50 border-gray-300 text-gray-700"
              }`}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div
        className={`border rounded-b-2xl p-4 ${
          theme === "dark"
            ? "bg-gray-900/50 border-gray-800"
            : "bg-white border-gray-200"
        }`}>
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Savolingizni yozing..."
            className={`flex-1 border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
              theme === "dark"
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500/50"
                : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500"
            }`}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center gap-2">
            {isTyping ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p
          className={`text-xs flex items-center justify-center gap-2 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}>
          <MessageCircle className="w-4 h-4" />
          AI-powered chatbot. Loyiha haqida savollaringizga javob beradi.
        </p>
      </div>
    </motion.div>
  );
};

export default DemoChatbot;
