import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CloudOff } from 'lucide-react';

export const DeviceVsCloud = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {/* On-Device Card (Highlighted) */}
      <motion.div
        className="relative p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:border-emerald-400/40 dark:bg-emerald-400/10 overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 dark:from-emerald-400/20 to-transparent opacity-50" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 rounded-full bg-emerald-500/20 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Telefonda ishlaydi</h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-1">Maxfiylik 100%</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Internet shart emas. Ovozli ma’lumotlar qurilmadan tashqariga chiqmaydi.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Cloud Card (Dimmed) */}
      <motion.div
        className="relative p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-gray-50/80 dark:bg-gray-800/80 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-3 rounded-full bg-gray-600/20 dark:bg-gray-600/30 text-gray-500 dark:text-gray-400">
            <CloudOff className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Bulutli yechimlar</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">Ma'lumot uzatiladi</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Serverga bog‘liq. Internet bo‘lmasa ishlamaydi. Maxfiylik xavfi mavjud.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
