import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIncoming, Mic, Search, Activity, AlertTriangle } from 'lucide-react';

const steps = [
  {
    title: "Qo‘ng‘iroq keladi",
    desc: "Noma’lum raqamdan qo‘ng‘iroq kelganda tizim avtomatik faollashadi.",
    icon: <PhoneIncoming className="w-6 h-6" />
  },
  {
    title: "AI eshitadi",
    desc: "Sun’iy intellekt nutqning dastlabki 10–15 sekundini tahlil qiladi.",
    icon: <Mic className="w-6 h-6" />
  },
  {
    title: "Tahlil jarayoni",
    desc: "Kalit so‘zlar, intonatsiya va psixologik bosim belgilari aniqlanadi.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Risk-score",
    desc: "Real vaqt rejimida xavflilik darajasi (0-100) hisoblanadi.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Ogohlantirish",
    desc: "Agar xavf yuqori bo‘lsa, ekranda qizil ogohlantirish paydo bo‘ladi.",
    icon: <AlertTriangle className="w-6 h-6" />
  }
];

export const InteractiveStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full py-12">
      <h3 className="text-2xl font-bold text-primary mb-12 text-center">Qanday Ishlaydi?</h3>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute top-[2.5rem] left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 hidden md:block rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary animate-pulse"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => setActiveStep(index)}>
              <motion.div
                className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mb-6 relative z-10 transition-all duration-300 ${
                  index <= activeStep 
                    ? 'bg-primary-foreground dark:bg-primary-foreground border-primary shadow-[0_0_20px_rgba(0,204,105,0.4)]' 
                    : 'bg-primary-foreground dark:bg-primary border-gray-300 dark:border-gray-700 hover:border-primary/50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`${index <= activeStep ? 'text-primary' : 'text-primary dark:text-primary-foreground'}`}>
                  {step.icon}
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  index <= activeStep ? 'bg-primary text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  {index + 1}
                </div>
              </motion.div>
              
              <h4 className={`text-sm font-bold mb-2 transition-colors ${
                index <= activeStep
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-400 dark:to-emerald-500'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                {step.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="mt-12 min-h-[120px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 dark:bg-gray-800/80 border border-primary/20 dark:border-primary/30 rounded-2xl p-6 max-w-2xl w-full text-center backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{steps[activeStep].title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg">{steps[activeStep].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
