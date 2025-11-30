import { motion } from "framer-motion";
import { Brain, Code, Building, Trophy, Zap, Shield, Target } from "lucide-react";

export function HowToSolution() {
  const strengths = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Sertifikatlangan AI mutaxassislar",
      description: "Suniy intellekt tadqiqotlar instituti va Nihol kabi yetakchi tashkilotlarda sertifikatlangan AI mutaxassislarimiz Deepfake, LLM va Machine Learning sohalarida chuqur bilimga ega."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Fullstack dasturchilar",
      description: "React, Next.js, Python, Django, PostgreSQL kabi zamonaviy texnologiyalarda mukammal mahoratga ega fullstack jamoamiz har qanday murakkab yechimni tez va sifatli yaratadi."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bank sohasi tajriba",
      description: "Agrobank interfeyslari va moliyaviy tizimlarni chuqur tushunadigan mutaxassislarimiz bank talablari va xavfsizlik standartlarini mukammal biladi."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Real loyihalar",
      description: "LenguaStory-AI startup asoschisi va boshqa muvaffaqiyatli loyihalar ortida tajribaga ega jamoamiz g'oyalarni real mahsulotga aylantirishni biladi."
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto my-16 bg-gradient-to-br from-white/90 to-gray-50 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-gray-700 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Target className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">Nega aynan biz?</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gray-900 dark:text-white">Bu muammoni hal qila oladigan </span>
          <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">yagona jamoa</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          6 kishilik professional jamoamizning har bir a'zosi o'z yo'nalishida yetakchi mutaxassis. 
          Bizning tajriba, texnik mahorat va real loyihalar ortidagi bilimimiz FiribLock AI ni 
          eng yaxshi yechimga aylantirish kafolatidir.
        </motion.p>
      </div>

      {/* Strength Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,204,105,0.2)] transition-all duration-500"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {strength.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold shadow-lg">
          <Shield className="w-5 h-5" />
          <span>100% muvaffaqiyat kafolati</span>
          <Zap className="w-5 h-5" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Biz ushbu muammoni hal qilish uchun yaratilganmiz
        </p>
      </motion.div>
    </motion.div>
  );
}