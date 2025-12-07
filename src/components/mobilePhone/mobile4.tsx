import { motion } from "framer-motion";
import {
  Phone,
  AlertTriangle,
  Grip,
  Mic,
  Volume2,
  MoreVertical,
} from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const mobile4 = () => {
  return (
    <>
      {/*4 Phone Mockup */}

      <motion.div
        className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden z-20 ml-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ boxShadow: "0 0 50px rgba(255, 100, 100, 0.15)" }}>
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30" />

        {/* Screen Content */}
        <div className="relative w-full h-full bg-linear-to-b from-gray-950 to-gray-900 p-6 flex flex-col pt-16">
          {/* Call Duration */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-gray-300 text-xs font-mono">00:09</span>
            </div>
          </div>

          {/* Phone Number */}
          <div className="text-center mb-6">
            {/* ⬅️ oldin mb-12 edi */}
            <h3 className="text-2xl font-semibold text-white mb-1">
              +998 90 966 47 77
            </h3>
            <p className="text-gray-400 text-sm">Beeline UZ</p>
          </div>

          {/* Empty Space + AI karta */}
          <div className="flex-1">
            {/* ⬆️ oldin shunchaki flex-1 edi */}
            <motion.div
              className="bg-sky-500/10 border border-sky-500/30 rounded-xl p-4 mb-6 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}>
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-sky-300" />
                <span className="text-sky-200 font-medium">
                  Tahlil qilinmoqda...
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1 w-full bg-sky-900/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-sky-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "20%" }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
              </div>

              {/* Skeleton with "Checking Numbers" */}
              <div className="mt-4 bg-gray-900/80 border border-gray-800 rounded-xl p-3 text-[11px] text-gray-200">
                {/* Top row: Checking animation */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-gray-400">
                    AI qo'ng'iroq raqamini tahlil qilmoqda
                  </span>
                  <motion.span
                    className="text-[10px] text-sky-300 font-mono"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity }}>
                    Scanning...
                  </motion.span>
                </div>

                <div className="space-y-3">
                  {/* Top section — suspicious numbers skeleton */}
                  <div className="w-full">
                    <p className="text-[10px] text-orange-300 mb-2 font-medium">
                      Shubhali raqamlar (qora ro'yxat)
                    </p>
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-full bg-gray-700/80" />
                      <Skeleton className="h-3 w-3/4 bg-gray-700/80" />
                      {/* Highlight current number */}
                      <motion.div
                        className="rounded-lg overflow-hidden"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 1.2, repeat: Infinity }}>
                        <Skeleton className="h-3 w-full bg-orange-500/40" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom section — official bank numbers skeleton */}
                  <div className="w-full pt-2 border-t border-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] text-sky-300 font-medium">
                        Agrobank rasmiy raqamlari
                      </p>
                      {/* Animated search indicator */}
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-1 rounded-full bg-sky-400"
                              animate={{ y: [0, -2, 0] }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-[9px] text-sky-200/70">
                          Qidirilmoqda
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Skeleton className="h-3 w-full bg-gray-700/80" />
                      <Skeleton className="h-3 w-5/6 bg-gray-700/80" />
                      <Skeleton className="h-3 w-2/3 bg-gray-700/80" />
                    </div>
                  </div>
                </div>

                {/* Bottom result skeleton */}
                <div className="mt-3 flex items-center justify-between text-[10px]">
                  <Skeleton className="h-3 w-40 bg-gray-700/80" />
                  <Skeleton className="h-3 w-16 bg-gray-700/80" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-4 gap-10 mb-8">
            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Grip className="w-5 h-5 text-gray-300" />
              </button>
              <span className="text-gray-300 text-xs">Keypad</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Mic className="w-5 h-5 text-gray-300" />
              </button>
              <span className="text-gray-300 text-xs">Mute</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <Volume2 className="w-5 h-5 text-gray-300" />
              </button>
              <span className="text-gray-300 text-xs">Speaker</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-300" />
              </button>
              <span className="text-gray-300 text-xs">More</span>
            </div>
          </div>

          {/* End Call Button */}
          <button className="w-42 mx-auto bg-red-500 hover:bg-red-600 text-white py-5 rounded-full font-semibold flex items-center justify-center transition-colors">
            <Phone className="w-6 h-6 rotate-135" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default mobile4;
