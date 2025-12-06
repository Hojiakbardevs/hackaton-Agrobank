import {
  AlertTriangle,
  Phone,
  Grip,
  Mic,
  Volume2,
  MoreVertical,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import Mobile1 from "./mobile1";
import Mobile2 from "./mobile2";
import Mobile3 from "./mobile3";
import Mobile4 from "./mobile4";

const Mobile = () => {
  return (
    <section className="relative w-full py-48 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container flex gap-10 mx-auto flex-wrap ">
        <Mobile1></Mobile1>

        <Mobile2></Mobile2>
        <Mobile4></Mobile4>
        {/* 5 Phone Mockup */}
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
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-white mb-1">
                +998 90 966 47 77
              </h3>
              <p className="text-gray-400 text-sm">Beeline UZ</p>
            </div>

            {/* Empty Space */}
            <div className="flex-1">
              <motion.div
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6 backdrop-blur-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 }}>
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-200/80 leading-relaxed">
                    Raqam{" "}
                    <span className="font-mono text-yellow-200">
                      +998 90 123 45 67
                    </span>{" "}
                    Agrobank rasmiy raqamlari bazasida topilmadi.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="h-1 w-full bg-yellow-900/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 1, delay: 1.8 }}
                  />
                </div>

                {/* Pastki qism to‘ldirilgan */}
                <div className="mt-2 text-xs text-yellow-300/70 space-y-2">
                  {/* 1-qator: tekshiruv statusi va foiz */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}>
                        <Activity className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                      <span>Tekshiruv holati</span>
                    </div>

                    {/* Endi bu "Risk Score" emas, shunchaki xavf foizi */}
                    <span className="font-mono font-semibold text-yellow-400">
                      20%
                    </span>
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
            <button className="w-42 mx-auto bg-red-500 hover:bg-red-600 text-white py-5 rounded-full font-semibold flex items-center justify-center  transition-colors">
              <Phone className="w-6 h-6 rotate-135" />
            </button>
          </div>
        </motion.div>
        <Mobile3></Mobile3>
      </div>
    </section>
  );
};

export default Mobile;
