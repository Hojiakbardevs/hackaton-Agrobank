import { motion } from "framer-motion";
import { Phone, Grip, Mic, Volume2, MoreVertical } from "lucide-react";

const mobile2 = () => {
  return (
    <>
      {/* 2 Phone Mockup */}
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
            <div className="flex-1"></div>

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
    </>
  );
};

export default mobile2;
