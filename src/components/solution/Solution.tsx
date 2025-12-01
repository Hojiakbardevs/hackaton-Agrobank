import { motion } from 'framer-motion';
import { HowToWork } from './howToWork';
import { CheckCircle2 } from 'lucide-react';
export const Solution = () => {
    return (
        <section className="relative w-full py-24  via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
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
                            <span className="bg-linear-to-r from-emerald-600 via-green-600 to-emerald-700 dark:from-emerald-500 dark:via-green-500 dark:to-emerald-600 bg-clip-text text-transparent font-bold">On-device AI Muhofiz</span>
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



                <HowToWork />



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
                            className="px-8 py-4 bg-linear-to-r from-emerald-600 to-green-600 dark:from-emerald-500 dark:to-green-500 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 dark:hover:from-emerald-600 dark:hover:to-green-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20"
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
