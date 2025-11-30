import { motion } from 'framer-motion';
import { RiskGauge } from './RiskGauge';
import { SolutionSteps } from './SolutionSteper';
import { DeviceVsCloud } from './devicecloud';
import { InteractiveStepper } from './interactiveStepper';

export const Solution = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Glows with Agrobank colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 dark:bg-green-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-300/5 dark:bg-emerald-300/2 blur-[100px] rounded-full pointer-events-none animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gray-800 dark:text-gray-100">Yechim: </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 dark:from-emerald-500 dark:via-green-500 dark:to-emerald-600 bg-clip-text text-transparent font-bold">On-device AI Muhofiz</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bizning texnologiyamiz to'liq telefoningizda ishlaydi. 
              Hech qanday serverga ovoz yuborilmaydi, bu esa 100% maxfiylikni ta'minlaydi.
            </motion.p>
          </motion.div>
        </div>

        {/* Main 4-Step Diagram */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SolutionSteps />
        </motion.div>

        {/* Comparison & Gauge Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="lg:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <DeviceVsCloud />
          </motion.div>
          <motion.div 
            className="flex justify-center lg:justify-end"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 p-8 rounded-2xl shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/20 flex flex-col items-center hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/30 transition-all duration-300">
              <motion.h4 
                className="text-gray-800 dark:text-gray-100 font-semibold mb-6 text-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Real-vaqt Risk Tahlili
              </motion.h4>
              <RiskGauge />
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Stepper */}
        <motion.div 
          className="border-t border-emerald-200/30 dark:border-gray-700/50 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <InteractiveStepper />
        </motion.div>
      </div>
    </section>
  );
};
