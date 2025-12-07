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
import { useTheme } from "../theme-provider";
import demoVideo from "../../assets/aivideo.mp4";

const DemoPage = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"video" | "api" | "chatbot">(
    "video"
  );
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string, _id?: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    {
      name: "React + TypeScript",
      icon: <Code className="w-4 h-4" />,
      color: "text-blue-400",
      category: "Frontend",
    },
    {
      name: "Flutter (iOS/Android)",
      icon: <Globe className="w-4 h-4" />,
      color: "text-cyan-400",
      category: "Mobile",
    },
    {
      name: "Python FastAPI",
      icon: <Zap className="w-4 h-4" />,
      color: "text-green-400",
      category: "Backend",
    },
    {
      name: "PostgreSQL Database",
      icon: <Shield className="w-4 h-4" />,
      color: "text-blue-500",
      category: "Backend",
    },
    {
      name: "Whisper AI (STT)",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-purple-400",
      category: "AI/ML",
    },
    {
      name: "Custom TTS Model",
      icon: <MessageCircle className="w-4 h-4" />,
      color: "text-yellow-400",
      category: "AI/ML",
    },
    {
      name: "Custom NLP Model",
      icon: <Shield className="w-4 h-4" />,
      color: "text-orange-400",
      category: "AI/ML",
    },
    {
      name: "TensorFlow Lite",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-pink-400",
      category: "AI/ML",
    },
    {
      name: "Scikit-learn (ML)",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-red-400",
      category: "AI/ML",
    },
  ];

  const features = [
    "Real-time qo'ng'iroq tahlili",
    "O'zbek, Rus, Ingliz tillarini qo'llab-quvvatlash",
    "Firibgarlik pattern aniqlanishi",
    "Risk score hisoblash",
    "Audio va Text tahlil",
    "O'qitilgan NLP modeli (94% aniqlik)",
    "Custom TTS (Text-to-Speech) modeli",
    "WebSocket orqali jonli stream",
  ];

  return (
    <div
      className={`min-h-screen pt-24 pb-16 ${
        theme === "dark"
          ? "bg-linear-to-b from-gray-950 via-gray-900 to-gray-950"
          : "bg-linear-to-b from-gray-50 via-white to-gray-50"
      }`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-4">
            🎉 2-Bosqich Demo
          </span>
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
            AI Muhofiz - Demo
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
            Firibgarlik qo'ng'iroqlarini real-time aniqlash tizimi. Quyida
            ilovamiz qanday ishlashini ko'rishingiz mumkin.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
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
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : theme === "dark"
                  ? "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200"
              }`}>
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
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
              <div
                className={`border rounded-2xl overflow-hidden shadow-2xl ${
                  theme === "dark"
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white border-gray-200"
                }`}>
                <div
                  className={`aspect-video flex items-center justify-center relative ${
                    theme === "dark"
                      ? "bg-linear-to-br from-gray-950 via-gray-900 to-gray-950"
                      : "bg-linear-to-br from-gray-100 via-gray-50 to-gray-100"
                  }`}>
                  <video
                    src={demoVideo}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* What's in the video */}
                <div
                  className={`border rounded-2xl p-6 transition-all ${
                    theme === "dark"
                      ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
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
                        className={`flex items-start gap-3 text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}>
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem & Solution */}
                <div
                  className={`border rounded-2xl p-6 transition-all ${
                    theme === "dark"
                      ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                      Muammo va Yechim
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <p className="text-red-300 font-medium mb-1">Muammo:</p>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                        O'zbekistonda telefon firibgarligi 2024-yilda 340% ga
                        oshdi. Firibgarlar bank xodimlari sifatida qo'ng'iroq
                        qilib, karta ma'lumotlarini olmoqda.
                      </p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <p className="text-emerald-300 font-medium mb-1">
                        Yechim:
                      </p>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                        AI Muhofiz real-time qo'ng'iroqlarni tahlil qiladi,
                        firibgarlik pattern larini aniqlaydi va foydalanuvchini
                        darhol ogohlantiradi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div
                className={`border rounded-2xl p-6 mt-8 transition-all ${
                  theme === "dark"
                    ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                    Texnologiyalar va Platformalar
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Platformalar */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Platformalar
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <Code className="w-6 h-6 text-blue-400 mb-2" />
                        <h5
                          className={`font-medium mb-1 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                          Web Dashboard
                        </h5>
                        <p
                          className={`text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                          React + TypeScript
                        </p>
                      </div>
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                        <Globe className="w-6 h-6 text-cyan-400 mb-2" />
                        <h5
                          className={`font-medium mb-1 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                          iOS Ilova
                        </h5>
                        <p
                          className={`text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                          Flutter (iOS)
                        </p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                        <Globe className="w-6 h-6 text-green-400 mb-2" />
                        <h5
                          className={`font-medium mb-1 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                          Android Ilova
                        </h5>
                        <p
                          className={`text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}>
                          Flutter (APK)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Texnologiyalar */}
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                      <Cpu className="w-5 h-5" />
                      Ishlatilgan texnologiyalar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-sm transition-colors ${
                            theme === "dark"
                              ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                              : "bg-gray-50 border-gray-200 hover:border-gray-300"
                          }`}>
                          <span className={tech.color}>{tech.icon}</span>
                          <span
                            className={
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }>
                            {tech.name}
                          </span>
                          <span
                            className={`text-xs ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}>
                            ({tech.category})
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Asosiy funksiyalar */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Asosiy funksiyalar va modellar
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {features.map((feature, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg ${
                            theme === "dark"
                              ? "text-gray-300 bg-gray-800/30"
                              : "text-gray-700 bg-gray-50"
                          }`}>
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Status */}
              <div
                className={`border rounded-2xl p-6 mt-8 transition-all ${
                  theme === "dark"
                    ? "bg-linear-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 hover:border-emerald-500/30"
                    : "bg-linear-to-r from-emerald-50 to-blue-50 border-emerald-200 hover:border-emerald-300"
                }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        MVP
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                        Loyiha holati
                      </span>
                    </div>
                    <h3
                      className={`text-2xl font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                      Keyingi qadamlar
                    </h3>
                    <ul
                      className={`text-sm space-y-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Mobil ilova (Android/iOS) integratsiyasi</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Bank API bilan to'liq integratsiya</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                          Ko'proq tillarni qo'shish (Qoraqalpoq, Tojik)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <a
                      href="http://176.118.198.131:8000/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                      <ExternalLink className="w-4 h-4" />
                      API Docs (Swagger)
                    </a>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "http://176.118.198.131:8000",
                          "base-url"
                        )
                      }
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all transform hover:scale-105">
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
