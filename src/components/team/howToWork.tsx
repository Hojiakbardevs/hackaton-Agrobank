import { motion } from "framer-motion";
import {
  PhoneIncoming,
  Mic,
  Brain,
  Activity,
  Shield,
  Zap,
  Lock,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Qo'ng'iroq keladi",
    description:
      "Noma'lum raqamdan qo'ng'iroq kelganda AI Muhofiz avtomatik faollashadi va tahlilni boshlaydi.",
    icon: <PhoneIncoming className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-500/50 dark:border-emerald-400/50",
  },
  {
    id: 2,
    title: "Ovoz tahlili",
    description:
      "Sun'iy intellekt nutqning dastlabki 10-15 sekundini real-vaqtda tahlil qiladi. Ovoz klonlari va deepfake aniqlanadi.",
    icon: <Mic className="w-8 h-8" />,
    color: "from-emerald-600 to-emerald-700",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-500/50 dark:border-emerald-400/50",
  },
  {
    id: 3,
    title: "AI tahlil qiladi",
    description:
      "Kalit so'zlar, intonatsiya, psixologik bosim belgilari va xavfli patternlar aniqlanadi.",
    icon: <Brain className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-500/50 dark:border-emerald-400/50",
  },
  {
    id: 4,
    title: "Risk-score hisoblanadi",
    description:
      "Real-vaqt rejimida xavflilik darajasi 0-100 ball orasida hisoblanadi va ekranda ko'rsatiladi.",
    icon: <Activity className="w-8 h-8" />,
    color: "from-emerald-500 via-green-500 to-emerald-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
    borderColor: "border-emerald-500/50 dark:border-emerald-400/50",
  },
  {
    id: 5,
    title: "Ogohlantirish",
    description:
      "Agar risk-score yuqori bo'lsa, ekranda qizil ogohlantirish va xavf tafsilotlari paydo bo'ladi.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10 dark:bg-red-500/10",
    borderColor: "border-red-500/50 dark:border-red-500/50",
  },
];

const features = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "100% Maxfiylik",
    description:
      "Barcha tahlil telefonda, hech qanday serverga ma'lumot yuborilmaydi",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-vaqt",
    description:
      "10-15 soniya ichida xavf aniqlanadi va ogohlantirish beriladi",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "On-device AI",
    description: "Internet shart emas, barcha AI modellari telefonda ishlaydi",
  },
];

export const HowToWork = () => {
  return (
    <section
      id="how-solve"
      className="relative w-full py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Glows - Agrobank colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 dark:bg-green-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-300/5 dark:bg-emerald-300/2 blur-[100px] rounded-full pointer-events-none animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="text-gray-800 dark:text-gray-100">Qanday </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 dark:from-emerald-500 dark:via-green-500 dark:to-emerald-600 bg-clip-text text-transparent font-bold">
                Ishlaydi?
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              AI Muhofiz 5 bosqichda firibgarlik qo'ng'iroqlarini aniqlaydi va
              sizni himoya qiladi. Barcha jarayon telefoningizda, real-vaqtda va
              100% maxfiy.
            </motion.p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}>
                <motion.div
                  className={`relative p-6 rounded-2xl border backdrop-blur-sm ${step.bgColor} ${step.borderColor} hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 transition-all duration-300 group`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}>
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                  />

                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div
                    className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center w-fit mx-auto shadow-lg`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-800 dark:text-white font-bold text-lg mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}>
                      <ArrowRight className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                    </motion.div>
                  </div>
                )}

                {/* Connector Line (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-0 left-1/2 transform translate-x-1/2 translate-y-full h-8 w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 rounded-2xl p-6 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}>
          <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Tizim tayyor ishlayapti
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              AI Muhofiz Agrobank mijozlari uchun tayyor. Demo versiyani ko'rib
              chiqing va qanday ishlashini bilib oling.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-500 dark:to-green-500 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 dark:hover:from-emerald-600 dark:hover:to-green-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "#contact")}>
              Demo Ko'rish
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
