import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const DemoChatbot = () => {
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

  // Predefined Q&A (Rule-based chatbot)
  const qaDatabase: { [key: string]: string } = {
    // Uzbek
    "loyihangiz nima qiladi":
      "AI Muhofiz - bu real-time firibgarlik qo'ng'iroqlarini aniqlash tizimi. Loyihamiz foydalanuvchilarga telefon firibgarliklaridan himoyalanishda yordam beradi. U qo'ng'iroqlarni real-time tahlil qiladi, firibgarlik pattern larini avtomatik aniqlaydi va foydalanuvchini darhol ogohlantiradi. Whisper AI yordamida nutqni matnga o'giradi va maxsus NLP modeli orqali xavf darajasini baholaydi.",

    "mahsulot kimlar uchun":
      "Mahsulot barcha telefon foydalanuvchilari uchun mo'ljallangan, ayniqsa: 1) Bank mijozlari - firibgarlar ko'pincha bank xodimlari sifatida qo'ng'iroq qilishadi; 2) Keksalar - ular ko'proq firibgarlik qurboni bo'lishadi; 3) Banklar va moliya tashkilotlari - o'z mijozlarini himoya qilish uchun; 4) Telekom operatorlari - xizmat sifatini oshirish uchun.",

    "qanday ishlaydi":
      "AI Muhofiz 4 bosqichda ishlaydi: 1️⃣ Qo'ng'iroq kelganda audio stream boshlanadi; 2️⃣ Whisper AI nutqni real-time matnga o'giradi; 3️⃣ NLP modeli matnni tahlil qilib, firibgarlik pattern larini qidiradi; 4️⃣ Risk score 70% dan oshsa, foydalanuvchiga ogohlantirish ko'rsatiladi. Butun jarayon 2-3 soniyada amalga oshadi!",

    texnologiyalar:
      "Biz quyidagi texnologiyalardan foydalanamiz: 🔹 Frontend: React + TypeScript, Tailwind CSS, Framer Motion; 🔹 Backend: Python FastAPI, WebSocket; 🔹 AI/ML: OpenAI Whisper (Speech-to-Text), Custom NLP Model (firibgarlik aniqlash), PyTorch; 🔹 Tillar: O'zbek, Rus, Ingliz tillarini qo'llab-quvvatlaydi.",

    "ai qanday foydalanadi":
      "Loyihamiz AI'dan ikki asosiy yo'nalishda foydalanadi: 1) Speech-to-Text: Whisper AI modeli orqali qo'ng'iroq audio sini real-time matnga o'giramiz. Bu 99% aniqlikda ishlaydi; 2) Firibgarlik aniqlash: Maxsus o'rgatilgan NLP modeli matnni tahlil qilib, 50+ dan ortiq firibgarlik pattern larini aniqlaydi (bank so'zlarini ishlatish, shoshilinchlik yaratish, shaxsiy ma'lumot so'rash va h.k.).",

    "aniqlik darajasi":
      "Bizning AI modelimiz 94% aniqlik darajasiga ega. Bu 10,000+ ta firibgarlik va xavfsiz qo'ng'iroq yozuvlari asosida o'rgatilgan. False positive (xato ogohlantirish) darajasi 3% dan kam.",

    "qanday bog'lanish":
      "Biz bilan bog'lanish uchun: 📧 Email: team@aimuhofiz.uz; 💬 Telegram: @aimuhofiz_support; 🌐 Website: aimuhofiz.uz. Hamkorlik yoki savol-javob uchun murojaat qiling!",

    "loyiha holati":
      "Hozirda loyiha MVP (Minimum Viable Product) bosqichida. Asosiy funksiyalar tayyor va ishlayapti. Keyingi qadamlar: 1) Android/iOS mobil ilova; 2) Bank API integratsiyasi; 3) Qo'shimcha tillar (Qoraqalpoq, Tojik); 4) Keng ko'lamli sinov va ishga tushirish.",

    "firibgarlik turlari":
      "AI Muhofiz quyidagi firibgarlik turlarini aniqlaydi: 🔴 Bank firibgarligi - bank xodimi sifatida qo'ng'iroq; 🔴 Lotereya firibgarligi - yutuk haqida xabar; 🔴 Texnik yordam firibgarligi - kompyuteringizda virus bor; 🔴 Qarindosh firibgarligi - farzandingiz muammoda; 🔴 Investitsiya firibgarligi - tez boyish va'dasi.",

    api: "API dokumentatsiyamiz: Base URL: http://176.118.198.131:8000. Asosiy endpointlar: POST /api/v1/analyze/text - matn tahlili; POST /api/v1/analyze/file - audio fayl yuklash; WS /api/v1/stream - real-time streaming. Swagger docs: /docs sahifasida.",

    // Greetings
    salom:
      "Salom! 👋 Men AI Muhofiz yordamchisiman. Sizga qanday yordam bera olaman? Loyiha haqida savollaringiz bo'lsa, bemalol so'rang!",

    rahmat:
      "Arzimaydi! 😊 Yana savollaringiz bo'lsa, bemalol yozing. AI Muhofiz sizni firibgarlardan himoya qilishga doimo tayyor!",

    // English
    "what does your project do":
      "AI Muhofiz is a real-time fraud call detection system. It analyzes phone calls in real-time using AI, detects fraud patterns, and alerts users immediately. It supports Uzbek, Russian, and English languages.",

    "how does it work":
      "AI Muhofiz works in 4 steps: 1️⃣ Audio stream starts when a call comes in; 2️⃣ Whisper AI converts speech to text in real-time; 3️⃣ Our NLP model analyzes text for fraud patterns; 4️⃣ If risk score exceeds 70%, user gets an alert. The whole process takes 2-3 seconds!",
  };

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Check for keyword matches
    for (const [key, answer] of Object.entries(qaDatabase)) {
      if (lowerQuestion.includes(key)) {
        return answer;
      }
    }

    // Check for partial matches
    const keywords = [
      { words: ["loyiha", "nima", "qil"], key: "loyihangiz nima qiladi" },
      { words: ["kim", "uchun", "mo'ljal"], key: "mahsulot kimlar uchun" },
      { words: ["qanday", "ishla"], key: "qanday ishlaydi" },
      { words: ["texnolog", "stack", "ishla"], key: "texnologiyalar" },
      { words: ["ai", "sun'iy", "intellekt"], key: "ai qanday foydalanadi" },
      { words: ["aniq", "foiz", "accuracy"], key: "aniqlik darajasi" },
      { words: ["bog'lan", "contact", "aloqa"], key: "qanday bog'lanish" },
      { words: ["holat", "status", "bosqich"], key: "loyiha holati" },
      { words: ["firibgar", "fraud", "tur"], key: "firibgarlik turlari" },
      { words: ["api", "endpoint", "swagger"], key: "api" },
      { words: ["salom", "hello", "hi"], key: "salom" },
      { words: ["rahmat", "thanks", "thank"], key: "rahmat" },
    ];

    for (const item of keywords) {
      if (item.words.some((word) => lowerQuestion.includes(word))) {
        return qaDatabase[item.key];
      }
    }

    // Default response
    return "Kechirasiz, bu savolga javob topa olmadim. Iltimos, quyidagi mavzulardan birini tanlang yoki boshqacha so'rang: loyiha haqida, qanday ishlaydi, texnologiyalar, AI, aniqlik, bog'lanish, API.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    const botResponse: Message = {
      id: messages.length + 2,
      type: "bot",
      content: findAnswer(input),
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botResponse]);
  };

  const quickQuestions = [
    "Loyihangiz nima qiladi?",
    "Mahsulot kimlar uchun?",
    "Qanday ishlaydi?",
    "Qanday texnologiyalar ishlatilgan?",
    "AI qanday foydalanadi?",
    "API haqida",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-t-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              AI Muhofiz Chatbot
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </h3>
            <p className="text-gray-400 text-sm">
              Loyiha haqida savollar uchun
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-gray-950/50 border-x border-gray-800 h-[400px] overflow-y-auto p-4 space-y-4">
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
                  ? "bg-blue-500/20 text-white"
                  : "bg-gray-800/50 text-gray-200"
              }`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {message.content}
              </p>
              <span className="text-[10px] text-gray-500 mt-1 block">
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
            <div className="bg-gray-800/50 rounded-2xl px-4 py-3">
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
      <div className="bg-gray-900/30 border-x border-gray-800 px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">Tez savollar:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => {
                setInput(q);
                handleSend();
              }}
              className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-300 transition-colors">
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-b-2xl p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Savolingizni yozing..."
            className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
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
        <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Bu rule-based chatbot. Loyiha haqida tez-tez so'raladigan savollarga
          javob beradi.
        </p>
      </div>
    </motion.div>
  );
};

export default DemoChatbot;
