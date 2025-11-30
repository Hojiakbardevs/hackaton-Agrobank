"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Database, GitBranch, Lock, Smartphone, Layers, Zap } from "lucide-react"

export function TechStack() {
  const stack = [
    {
      category: "Frontend / Mobile",
      icon: Smartphone,
      techs: ["React Native", "Flutter", "Swift/Kotlin", "React Hooks"],
      color: "from-blue-500 to-cyan-500",
      description: "Kross-platform mobil ilovalar"
    },
    {
      category: "Backend & API",
      icon: Code2,
      techs: ["Node.js", "FastAPI", "REST/GraphQL", "WebSocket"],
      color: "from-emerald-500 to-green-500",
      description: "Tezkor va scalable backend"
    },
    {
      category: "AI/ML Engine",
      icon: Cpu,
      techs: ["Whisper Tiny", "TensorFlow Lite", "ONNX", "PyTorch"],
      color: "from-purple-500 to-pink-500",
      description: "On-device AI modellar"
    },
    {
      category: "Data & Analytics",
      icon: Database,
      techs: ["PostgreSQL", "Redis", "Elasticsearch", "BigQuery"],
      color: "from-orange-500 to-red-500",
      description: "Katta ma'lumotlar tizimi"
    },
    {
      category: "Security & DevOps",
      icon: Lock,
      techs: ["TLS/SSL", "E2E Encryption", "GitHub Actions", "Docker"],
      color: "from-indigo-500 to-blue-500",
      description: "Xavfsizlik va deploy"
    },
    {
      category: "Version Control",
      icon: GitBranch,
      techs: ["Git", "GitHub", "CI/CD", "Semantic Versioning"],
      color: "from-rose-500 to-pink-500",
      description: "Kod boshqaruvi"
    }
  ]

  return (
    <div className="w-full space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
          Texnologiya Stack
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          Modern, scalable va secure texnologiyalar bilan qurilgan AI Muhofiz platformasi
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((item, i) => (
          <motion.div
            key={i}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.category}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, j) => (
                    <motion.span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Zamonaviy Texnologiya Arxitekturasi
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Microservices, AI-first va cloud-native yondashuv
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="w-5 h-5" />, text: "Real-time Processing" },
            { icon: <Lock className="w-5 h-5" />, text: "Enterprise Security" },
            { icon: <Cpu className="w-5 h-5" />, text: "AI Optimized" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="text-emerald-600 dark:text-emerald-400">
                {feature.icon}
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
