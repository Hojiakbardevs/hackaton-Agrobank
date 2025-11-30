"use client"

import { motion } from "framer-motion"
import { Brain, Layers, Radio, Zap, CheckCircle, Cpu, Activity, Shield } from "lucide-react"

export function AIImplementation() {
  const pipelineSteps = [
    {
      stage: "Audio Input",
      detail: "Qo'ng'iroq audiosi real vaqtda aniqlanadi",
      icon: <Radio className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      stage: "Transcription",
      detail: "Whisper Tiny tomonidan Uzbek/Rus tilga tarjima qilindi",
      icon: <Brain className="w-5 h-5" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      stage: "Feature Extraction",
      detail: "Firibgarlik alomatlari tahlil qilindi (ton, tempo, mavzu)",
      icon: <Activity className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      stage: "Classification",
      detail: "ONNX modeli risk skorini hisobladi",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-orange-500 to-red-500"
    },
    {
      stage: "Decision",
      detail: "Risk > 70% bo'lsa, ogohlantirish yuboriladi",
      icon: <Shield className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const features = [
    {
      feature: "Multi-language support",
      detail: "O'zbek, Rus, English tillarini 94-96% aniqlik bilan taniydi",
      icon: <Brain className="w-6 h-6" />,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      feature: "Lightweight model",
      detail: "~50MB ONNX modeli - hech qanday telefonda joy etadi",
      icon: <Zap className="w-6 h-6" />,
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      feature: "Offline-first",
      detail: "Internet kerak emas - butunlay on-device tahlili",
      icon: <Shield className="w-6 h-6" />,
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      feature: "Real-time response",
      detail: "10-15 soniyada qaror chiqaradi, 500ms latency",
      icon: <Activity className="w-6 h-6" />,
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      feature: "Continuous learning",
      detail: "Bank uchun feedback loop qo'shalgan (secure)",
      icon: <Layers className="w-6 h-6" />,
      color: "text-indigo-600 dark:text-indigo-400"
    }
  ]

  return (
    <div className="w-full space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          AI/ML amalgamasi qanday ishlaydi?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          On-device deep learning modeli orqali real vaqtda firibgarlikni aniqlash
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Pipeline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI Pipeline</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Real vaqt protsessing zanjiri</p>
            </div>
          </div>

          <div className="space-y-4">
            {pipelineSteps.map((item, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {item.stage}
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Asosiy Xususiyatlar</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Afzalliklar va imkoniyatlar</p>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-700 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                        {item.feature}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Integration Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 dark:from-emerald-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
            <Radio className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bank integratsiyasi</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">SDK orqali osongina ulanish</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Bank API", "FiribLock SDK", "On-device AI", "Risk Analytics"].map((item, i) => (
            <div key={i} className="text-center relative">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <div className="text-white font-bold text-lg">
                    {i + 1}
                  </div>
                </div>
                <p className="font-semibold text-sm text-gray-900 dark:text-white">{item}</p>
              </motion.div>
              
              {/* Connection Arrow */}
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Radio className="w-4 h-4 text-white transform rotate-90" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
