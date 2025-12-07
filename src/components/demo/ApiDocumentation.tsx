import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Copy,
  Check,
  Play,
  ChevronDown,
  ChevronUp,
  Zap,
  FileAudio,
  MessageSquare,
  Radio,
  Server,
  Info,
} from "lucide-react";

const ApiDocumentation = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(
    "text-analysis"
  );

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const baseUrl = "http://176.118.198.131:8000";

  const endpoints = [
    {
      id: "health",
      name: "Health Check",
      method: "GET",
      path: "/health",
      description: "Barcha servislarning holatini tekshirish",
      icon: <Server className="w-4 h-4" />,
      color: "emerald",
      request: null,
      response: `{
  "status": "healthy",
  "services": {
    "api": "running",
    "whisper": "ready",
    "nlp_model": "loaded"
  }
}`,
    },
    {
      id: "api-info",
      name: "API Info",
      method: "GET",
      path: "/api",
      description: "API haqida ma'lumot va mavjud endpointlar",
      icon: <Info className="w-4 h-4" />,
      color: "blue",
      request: null,
      response: `{
  "name": "AI Muhofiz API",
  "version": "1.0.0",
  "description": "Real-time fraud call detection",
  "endpoints": ["/api/v1/analyze/text", "/api/v1/analyze/file", "..."]
}`,
    },
    {
      id: "text-analysis",
      name: "Text Analysis",
      method: "POST",
      path: "/api/v1/analyze/text",
      description:
        "Matnni firibgarlik uchun tahlil qilish (O'zbek, Rus, Ingliz)",
      icon: <MessageSquare className="w-4 h-4" />,
      color: "purple",
      params: [
        {
          name: "text",
          type: "string",
          required: true,
          desc: "Tahlil qilinadigan matn",
        },
        {
          name: "language",
          type: "string",
          required: false,
          desc: "Til kodi: uz, ru, en (default: uz)",
        },
      ],
      request: `curl -X POST "${baseUrl}/api/v1/analyze/text" \\
  -d "text=Assalomu alaykum, men bank xavfsizlik xizmatidan. Kartangiz bloklandi, CVV kodingizni ayting!" \\
  -d "language=uz"`,
      response: `{
  "risk_level": "danger",
  "risk_score": 0.92,
  "detected_patterns": [
    "bank_impersonation",
    "urgency_pressure", 
    "card_info_request"
  ],
  "warning": "Bu qo'ng'iroq firibgarlik bo'lishi mumkin!",
  "recommendation": "Hech qanday ma'lumot bermang va qo'ng'iroqni tugatib, bankingizga murojaat qiling."
}`,
    },
    {
      id: "audio-file",
      name: "Audio File Upload",
      method: "POST",
      path: "/api/v1/analyze/file",
      description: "Audio faylni yuklash va tahlil qilish",
      icon: <FileAudio className="w-4 h-4" />,
      color: "orange",
      params: [
        {
          name: "file",
          type: "file",
          required: true,
          desc: "Audio fayl (WAV, MP3, OGG, M4A, WebM)",
        },
        {
          name: "language",
          type: "string",
          required: false,
          desc: "Til kodi: uz, ru, en",
        },
      ],
      request: `curl -X POST "${baseUrl}/api/v1/analyze/file" \\
  -F "file=@audio.wav" \\
  -F "language=uz"`,
      response: `{
  "transcription": "Salom, men bank xodimiman...",
  "risk_level": "high",
  "risk_score": 0.78,
  "detected_patterns": ["bank_impersonation"],
  "duration_seconds": 45.2,
  "language_detected": "uz"
}`,
    },
    {
      id: "audio-base64",
      name: "Audio Base64/URL",
      method: "POST",
      path: "/api/v1/analyze",
      description: "Base64 encoded audio yoki URL orqali tahlil",
      icon: <Code className="w-4 h-4" />,
      color: "cyan",
      request: `curl -X POST "${baseUrl}/api/v1/analyze" \\
  -H "Content-Type: application/json" \\
  -d '{
    "audio_base64": "<BASE64_ENCODED_AUDIO>",
    "language": "uz"
  }'`,
      response: `{
  "transcription": "...",
  "risk_level": "safe",
  "risk_score": 0.12,
  "detected_patterns": [],
  "message": "Xavfsiz qo'ng'iroq"
}`,
    },
    {
      id: "websocket",
      name: "Real-time Stream",
      method: "WS",
      path: "/api/v1/stream",
      description: "WebSocket orqali real-time audio streaming va tahlil",
      icon: <Radio className="w-4 h-4" />,
      color: "pink",
      request: `// JavaScript WebSocket
const ws = new WebSocket("ws://176.118.198.131:8000/api/v1/stream");

ws.onopen = () => {
  console.log("Connected");
  // Audio chunk larni binary formatda yuborish
  ws.send(audioChunk);
};

ws.onmessage = (event) => {
  const result = JSON.parse(event.data);
  console.log("Risk Score:", result.risk_score);
};`,
      response: `{
  "chunk_id": 1,
  "partial_transcription": "Assalomu alaykum...",
  "current_risk_score": 0.45,
  "patterns_detected": [],
  "is_final": false
}`,
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "POST":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "WS":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6">
      {/* Header */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              API Dokumentatsiya
            </h2>
            <p className="text-gray-400">
              AI Muhofiz API - firibgarlik qo'ng'iroqlarini aniqlash uchun
              RESTful API
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gray-800 rounded-xl">
              <span className="text-gray-400 text-sm">Base URL:</span>
              <code className="ml-2 text-emerald-400 font-mono text-sm">
                {baseUrl}
              </code>
            </div>
            <button
              onClick={() => copyToClipboard(baseUrl, "base-url")}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors">
              {copiedId === "base-url" ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`${baseUrl}/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm hover:bg-emerald-500/20 transition-colors">
            <Zap className="w-4 h-4" />
            Swagger UI
          </a>
          <a
            href={`${baseUrl}/openapi.json`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm hover:bg-blue-500/20 transition-colors">
            <Code className="w-4 h-4" />
            OpenAPI Schema
          </a>
        </div>
      </div>

      {/* Endpoints */}
      <div className="space-y-4">
        {endpoints.map((endpoint) => (
          <div
            key={endpoint.id}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
            {/* Header */}
            <button
              onClick={() =>
                setExpandedEndpoint(
                  expandedEndpoint === endpoint.id ? null : endpoint.id
                )
              }
              className="w-full flex items-center justify-between p-4 hover:bg-gray-800/30 transition-colors">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    endpoint.color === "emerald"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : endpoint.color === "blue"
                      ? "bg-blue-500/20 text-blue-400"
                      : endpoint.color === "purple"
                      ? "bg-purple-500/20 text-purple-400"
                      : endpoint.color === "orange"
                      ? "bg-orange-500/20 text-orange-400"
                      : endpoint.color === "cyan"
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-pink-500/20 text-pink-400"
                  }`}>
                  {endpoint.icon}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-0.5 text-xs font-mono font-bold rounded border ${getMethodColor(
                        endpoint.method
                      )}`}>
                      {endpoint.method}
                    </span>
                    <code className="text-white font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    {endpoint.description}
                  </p>
                </div>
              </div>
              {expandedEndpoint === endpoint.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {/* Expanded Content */}
            {expandedEndpoint === endpoint.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="border-t border-gray-800 p-4 space-y-4">
                {/* Parameters */}
                {endpoint.params && (
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Parametrlar:
                    </h4>
                    <div className="bg-gray-950/50 rounded-xl p-3">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-gray-400 text-left">
                            <th className="pb-2">Nomi</th>
                            <th className="pb-2">Turi</th>
                            <th className="pb-2">Majburiy</th>
                            <th className="pb-2">Tavsif</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.params.map((param, i) => (
                            <tr key={i} className="border-t border-gray-800">
                              <td className="py-2 text-emerald-400 font-mono">
                                {param.name}
                              </td>
                              <td className="py-2 text-blue-400">
                                {param.type}
                              </td>
                              <td className="py-2">
                                {param.required ? (
                                  <span className="text-red-400">Ha</span>
                                ) : (
                                  <span className="text-gray-500">Yo'q</span>
                                )}
                              </td>
                              <td className="py-2 text-gray-300">
                                {param.desc}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Request Example */}
                {endpoint.request && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">
                        So'rov namunasi:
                      </h4>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            endpoint.request!,
                            `req-${endpoint.id}`
                          )
                        }
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
                        {copiedId === `req-${endpoint.id}` ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        Nusxalash
                      </button>
                    </div>
                    <pre className="bg-gray-950 rounded-xl p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300 font-mono whitespace-pre">
                        {endpoint.request}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Response Example */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">Javob namunasi:</h4>
                    <button
                      onClick={() =>
                        copyToClipboard(endpoint.response, `res-${endpoint.id}`)
                      }
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
                      {copiedId === `res-${endpoint.id}` ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      Nusxalash
                    </button>
                  </div>
                  <pre className="bg-gray-950 rounded-xl p-4 overflow-x-auto">
                    <code className="text-sm text-emerald-300 font-mono whitespace-pre">
                      {endpoint.response}
                    </code>
                  </pre>
                </div>

                {/* Try it button */}
                <div className="flex justify-end">
                  <a
                    href={`${baseUrl}/docs#/${endpoint.name.replace(
                      / /g,
                      "%20"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 rounded-xl transition-colors">
                    <Play className="w-4 h-4" />
                    Swagger da sinab ko'rish
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Risk Levels Legend */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Risk Darajalari
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              level: "safe",
              score: "0-25%",
              color: "emerald",
              desc: "Xavfsiz",
            },
            {
              level: "low",
              score: "26-50%",
              color: "yellow",
              desc: "Past xavf",
            },
            {
              level: "high",
              score: "51-75%",
              color: "orange",
              desc: "Yuqori xavf",
            },
            { level: "danger", score: "76-100%", color: "red", desc: "Xavfli" },
          ].map((item) => (
            <div
              key={item.level}
              className={`rounded-xl p-4 text-center ${
                item.color === "emerald"
                  ? "bg-emerald-500/10 border border-emerald-500/30"
                  : item.color === "yellow"
                  ? "bg-yellow-500/10 border border-yellow-500/30"
                  : item.color === "orange"
                  ? "bg-orange-500/10 border border-orange-500/30"
                  : "bg-red-500/10 border border-red-500/30"
              }`}>
              <div
                className={`font-bold text-lg ${
                  item.color === "emerald"
                    ? "text-emerald-400"
                    : item.color === "yellow"
                    ? "text-yellow-400"
                    : item.color === "orange"
                    ? "text-orange-400"
                    : "text-red-400"
                }`}>
                {item.level.toUpperCase()}
              </div>
              <div className="text-gray-400 text-sm">{item.score}</div>
              <div
                className={`text-sm mt-1 ${
                  item.color === "emerald"
                    ? "text-emerald-300"
                    : item.color === "yellow"
                    ? "text-yellow-300"
                    : item.color === "orange"
                    ? "text-orange-300"
                    : "text-red-300"
                }`}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ApiDocumentation;
