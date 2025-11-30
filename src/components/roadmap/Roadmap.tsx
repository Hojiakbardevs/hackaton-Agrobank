import { motion } from "framer-motion";
import { SprintTimeline } from "./SprintTimeline";
import { RoadmapStages } from "./RoadmapStages";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="relative w-full py-24 bg-background from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Glows - Agrobank colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 dark:bg-green-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-300/5 dark:bg-emerald-300/2 blur-[100px] rounded-full pointer-events-none animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <p className="text-sm font-semibold text-primary">Yo'l Xarita</p>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              <span className="text-gray-800 dark:text-white">
                Bosqichlar va{" "}
              </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 dark:from-emerald-500 dark:via-green-500 dark:to-emerald-600 bg-clip-text text-transparent">
                Rivojlanish Rejasi
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}>
              FiribLock AI Prototipdan Launch bosqichasigacha rivojlanish
              yo'lixaritasi. 4 haftalik sprint orqali MVP tayyor qilishni
              rejalashtiryapmiz.
            </motion.p>
          </motion.div>
        </div>

        {/* Main stages grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Asosiy Bosqichlar
          </h3>
          <RoadmapStages />
        </motion.div>

        {/* Sprint timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            4 Haftalik Sprint Rejasi
          </h3>
          <SprintTimeline />
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
