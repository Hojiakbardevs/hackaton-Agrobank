
import { motion } from 'framer-motion';

export const RiskGauge = () => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="96"
          cy="96"
          r="88"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="12"
        />
        <motion.circle
          cx="96"
          cy="96"
          r="88"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="12"
          strokeDasharray="553"
          strokeDashoffset="553"
          strokeLinecap="round"
          initial={{ strokeDashoffset: 553 }}
          whileInView={{ strokeDashoffset: 100 }} // ~80% filled
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">87</span>
          <span className="text-xs text-gray-600 dark:text-gray-400 block text-center">RISK</span>
        </motion.div>
      </div>
    </div>
  );
};
