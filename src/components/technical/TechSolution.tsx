"use client"

import { motion } from "framer-motion"
import { 
  Phone, 
  Database, 
  Cpu, 
  Brain, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Activity,
  Zap
} from "lucide-react"

export function TechnicalSolution() {
  const flowSteps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Input",
      description: "Kirib kelayotgan qo'ng'iroq raqami + audio stream",
      detail: "Foydalanuvchi telefoni",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Processing",
      description: "Raqam lokal bazada tekshiriladi, Whisper Tiny tahlil qiladi",
      detail: "On-device (hech qanday internet)",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Analysis",
      description: "Klassifikator firibgarlik xususiyatlarini qidiradi",
      detail: "ML Model (ONNX)",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Decision",
      description: "Risk-score + ogohlantirish qaror qilindi",
      detail: "Real-time",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Output",
      description: "Ekranda katta ogohlantirish + bank uchun analytics",
      detail: "Foydalanuvchi va Bank",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="w-full space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Arxitektura va Data Flow
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          On-device AI texnologiyasi orqali telefon firibgarligini real vaqtda aniqlash jarayoni
        </p>
      </motion.div>

      {/* Flow Diagram */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden lg:block" style={{ top: '50%' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {flowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => console.log(`Clicked on ${step.title}`)}
            >
              {/* Connection Arrow */}
              {index < flowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-emerald-500 animate-pulse" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 cursor-pointer">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 text-center leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Activity className="w-3 h-3" />
                    <span>{step.detail}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Real-time Processing",
            description: "Qo'ng'iroq davomida aniqlash, hech qanday kechikishsiz"
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "On-device Security",
            description: "Ma'lumotlar telefonda qoladi, internet talab qilmaydi"
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "95% Accuracy",
            description: "ONNX model bilan yuqori aniqlikda aniqlash"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
