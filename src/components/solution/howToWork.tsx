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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                />

                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className={`mb-4 p-4 rounded-xl bg-linear-to-br ${step.color} text-white flex items-center justify-center w-fit mx-auto shadow-lg`}>
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
                <div className="lg:hidden absolute bottom-0 left-1/2 transform translate-x-1/2 translate-y-full h-8 w-0.5 bg-linear-to-b from-emerald-500/50 to-transparent" />
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
              <div className="p-3 rounded-xl bg-linear-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 text-white shrink-0">
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
     
    </div>
  );
};
