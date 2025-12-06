import { motion } from "framer-motion";
import {
  Play,
  FileText,
  Code,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Zap,
  Shield,
  Cpu,
  Globe,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import ApiDocumentation from "./ApiDocumentation";
import DemoChatbot from "./DemoChatbot";
const DemoPage = () => {
  const [activeTab, setActiveTab] = useState<"video" | "api" | "chatbot">(
    "video"
  );
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    {
      name: "React + TypeScript",
      icon: <Code className="w-4 h-4" />,
      color: "text-blue-400",
    },
    {
      name: "Python FastAPI",
      icon: <Zap className="w-4 h-4" />,
      color: "text-green-400",
    },
    {
      name: "Whisper AI (STT)",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-purple-400",
    },
    {
      name: "Custom NLP Model",
      icon: <Shield className="w-4 h-4" />,
      color: "text-orange-400",
    },
    {
      name: "WebSocket Streaming",
      icon: <Globe className="w-4 h-4" />,
      color: "text-cyan-400",
    },
  ];

  const features = [
    "Real-time qo'ng'iroq tahlili",
    "O'zbek, Rus, Ingliz tillarini qo'llab-quvvatlash",
    "Firibgarlik pattern aniqlanishi",
    "Risk score hisoblash",
    "Audio va Text tahlil",
    "WebSocket orqali jonli stream",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-4">
            🎉 2-Bosqich Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Muhofiz - Demo
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Firibgarlik qo'ng'iroqlarini real-time aniqlash tizimi. Quyida
            ilovamiz qanday ishlashini ko'rishingiz mumkin.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            {
              id: "video",
              label: "Demo Video",
              icon: <Play className="w-4 h-4" />,
            },
            {
              id: "api",
              label: "API Dokumentatsiya",
              icon: <Code className="w-4 h-4" />,
            },
            {
              id: "chatbot",
              label: "Chatbot",
              icon: <MessageCircle className="w-4 h-4" />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "video" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8">
              {/* Video Player */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gray-950 flex items-center justify-center relative">
                  {/* Replace with actual video */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-emerald-500/30 transition-colors">
                      <Play className="w-8 h-8 text-emerald-400 ml-1" />
                    </div>
                    <p className="text-gray-400">
                      Demo video yuklash uchun bosing
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Video faylni public/demo-video.mp4 ga joylashtiring
                    </p>
                  </div>

                  {/* Uncomment when video is ready */}
                  {/* <video 
                    controls 
                    className="w-full h-full"
                    poster="/demo-thumbnail.jpg"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                  </video> */}
                </div>
              </div>

              {/* Description Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* What's in the video */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Videoda nima ko'rsatilgan
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Qo'ng'iroq kelganda AI tizimi qanday ishga tushishi",
                      "Real-time audio tahlil va transkriptsiya",
                      "Firibgarlik pattern larini aniqlash jarayoni",
                      "Risk score hisoblash va ogohlantirish",
                      "Foydalanuvchiga ogohlantirish ko'rsatish",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem & Solution */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Muammo va Yechim
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <p className="text-red-300 font-medium mb-1">Muammo:</p>
                      <p className="text-gray-400 text-sm">
                        O'zbekistonda telefon firibgarligi 2024-yilda 340% ga
                        oshdi. Firibgarlar bank xodimlari sifatida qo'ng'iroq
                        qilib, karta ma'lumotlarini olmoqda.
                      </p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <p className="text-emerald-300 font-medium mb-1">
                        Yechim:
                      </p>
                      <p className="text-gray-400 text-sm">
                        AI Muhofiz real-time qo'ng'iroqlarni tahlil qiladi,
                        firibgarlik pattern larini aniqlaydi va foydalanuvchini
                        darhol ogohlantiradi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Texnologiyalar va AI Yechimlar
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 mb-4">
                      Ishlatilgan texnologiyalar:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm">
                          <span className={tech.color}>{tech.icon}</span>
                          <span className="text-gray-300">{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-4">Asosiy funksiyalar:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Status */}
              <div className="bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        MVP
                      </span>
                      <span className="text-gray-400">Loyiha holati</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Keyingi qadamlar
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                        Mobil ilova (Android/iOS) integratsiyasi
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                        Bank API bilan to'liq integratsiya
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                        Ko'proq tillarni qo'shish (Qoraqalpoq, Tojik)
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="http://176.118.198.131:8000/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      API Docs (Swagger)
                    </a>
                    <button
                      onClick={() =>
                        copyToClipboard("http://176.118.198.131:8000")
                      }
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors">
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copied ? "Nusxalandi!" : "Base URL nusxalash"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "api" && <ApiDocumentation />}
          {activeTab === "chatbot" && <DemoChatbot />}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
