import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIncoming, Cpu, Activity, AlertOctagon, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Qo‘ng‘iroq aniqlanadi",
    icon: <PhoneIncoming className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    color: "border-emerald-500/50 bg-emerald-500/10 dark:border-emerald-400/50 dark:bg-emerald-400/10"
  },
  {
    id: 2,
    title: "Nutq tahlili (Whisper Tiny)",
    icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    color: "border-emerald-500/50 bg-emerald-500/10 dark:border-emerald-400/50 dark:bg-emerald-400/10"
  },
  {
    id: 3,
    title: "Risk-score 0–100",
    icon: <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    color: "border-emerald-500/50 bg-emerald-500/10 dark:border-emerald-400/50 dark:bg-emerald-400/10"
  },
  {
    id: 4,
    title: "Ekranda ogohlantirish",
    icon: <AlertOctagon className="w-6 h-6 text-red-500" />,
    color: "border-red-500/50 bg-red-500/10"
  }
];

export const SolutionSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex flex-col items-center">
          <motion.div
            className={`w-full p-6 rounded-2xl border backdrop-blur-sm flex flex-col items-center text-center z-10 ${step.color}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 p-3 rounded-full bg-white/10 dark:bg-gray-700/50">
              {step.icon}
            </div>
            <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-2">Qadam {step.id}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{step.title}</p>
          </motion.div>

          {/* Connector Arrow (Desktop only) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-0">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.1 }}
              >
                <ArrowRight className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </motion.div>
            </div>
          )}
          
          {/* Connector Line (Mobile only) */}
          {index < steps.length - 1 && (
            <div className="lg:hidden absolute bottom-0 left-1/2 transform translate-x-1/2 translate-y-full h-6 w-0.5 bg-gray-300/50 dark:bg-gray-600/50" />
          )}
        </div>
      ))}
    </div>
  );
};
