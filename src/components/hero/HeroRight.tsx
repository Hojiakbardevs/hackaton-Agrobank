
import { motion } from 'framer-motion';
import { Phone, AlertTriangle, Activity, ShieldCheck } from 'lucide-react';


export const HeroRight = () => {

    return (
        <div className="relative flex justify-center items-center z-10 h-full min-h-[600px]">
            {/* Scanning Ring Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-[500px] h-[500px] border border-primary/20 rounded-full"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] border border-primary/30 rounded-full"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute w-[600px] h-[600px] border border-dashed border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Phone Mockup */}
            <motion.div
                className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ boxShadow: '0 0 50px rgba(0, 204, 105, 0.15)' }}
            >
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30" />

                {/* Screen Content */}
                <div className="relative w-full h-full bg-linear-to-b from-gray-900 to-black p-6 flex flex-col pt-16">

                    {/* Incoming Call UI */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
                            <Phone className="w-8 h-8 text-white z-10" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-1">+998 90 966 47 77</h3>
                        <p className="text-gray-400 text-sm">O‘zbekiston</p>
                    </div>

                    {/* Danger Alert */}
                    <motion.div
                        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 backdrop-blur-md"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            <span className="text-red-400 font-medium">Yuqori Xavfli Qo‘ng‘iroq</span>
                        </div>
                        <div className="h-1 w-full bg-red-900/30 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-red-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "87%" }}
                                transition={{ duration: 1, delay: 1.8 }}
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-red-300/70">
                            <div className="flex items-center gap-1">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Activity className="w-3 h-3 text-red-400" />
                                </motion.div>
                                <span>Risk Score</span>
                            </div>
                            <span className="font-bold text-red-400">87/100</span>
                        </div>
                    </motion.div>

                    {/* AI Waveform */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="flex items-center gap-1 h-12">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-primary rounded-full"
                                    animate={{ height: [10, 30, 10] }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                        <p className="absolute bottom-0 text-xs text-primary/60 font-mono">AI ANALYZING VOICE...</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-auto mb-8">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-full flex items-center justify-center transition-colors">
                            <Phone className="w-6 h-6 rotate-135" />
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-full flex items-center justify-center transition-colors">
                            <Phone className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Floating Analytics Card */}
            <motion.div
                className="absolute -right-12 bottom-32 bg-gray-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-30 w-48 hidden md:block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-white">Real-time Protection</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">96.4%</div>
                <div className="text-xs text-gray-400">Aniqlik darajasi</div>

                {/* Mini Sparkline */}
                <svg className="w-full h-8 mt-2 overflow-visible" viewBox="0 0 100 30">
                    <motion.path
                        d="M0,30 L10,25 L20,28 L30,15 L40,20 L50,10 L60,18 L70,5 L80,12 L90,8 L100,2"
                        fill="none"
                        stroke="#00cc69"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};
