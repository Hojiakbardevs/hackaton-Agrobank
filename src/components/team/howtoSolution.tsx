import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Building,
  Trophy,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import cert2 from "@/assets/certifcaite 2.png";
import cert3 from "@/assets/certifcaite 3.png";
import cert4 from "@/assets/certifcaite 4.png";
import cert5 from "@/assets/certifcaite 5.png";
import cert6 from "@/assets/certifcaite 6.png";
import cert7 from "@/assets/certifcaite 7.png";

import Agrobank from "@/assets/agrbankbinosi.jfif"
import Toshkent from "@/assets/toshkent.jpg"
import moliya from "@/assets/moliya.jpg"


import proj1 from "@/assets/project1.png"
import proj2 from "@/assets/project2.jpg"
import proj3 from "@/assets/project3.jpg"
import proj4 from "@/assets/project4.jpg"

export function HowToSolution() {
  // Data for charts
  const techStackData = [
    { name: "Python", value: 30, color: "#10b981" },
    { name: "React/Next.js", value: 25, color: "#059669" },
    { name: "AI/ML", value: 20, color: "#047857" },
    { name: "Bank Systems", value: 15, color: "#065f46" },
    { name: "Other", value: 10, color: "#064e3b" },
  ];

  const strengths = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Sertifikatlangan AI mutaxassislar",
      description:
        "Suniy intellekt tadqiqotlar instituti va Nihol kabi yetakchi tashkilotlarda sertifikatlangan AI mutaxassislarimiz Deepfake, LLM va Machine Learning sohalarida chuqur bilimga ega.",
      certificates: [cert2, cert3, cert4, cert5, cert6, cert7],
      chartType: "certificates",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Fullstack dasturchilar",
      description:
        "React, Next.js, Python, Django, PostgreSQL kabi zamonaviy texnologiyalarda mukammal mahoratga ega fullstack jamoamiz har qanday murakkab yechimni tez va sifatli yaratida.",
      chartData: techStackData,
      chartType: "pie",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bank sohasi tajriba",
      description:
        "Agrobank interfeyslari va moliyaviy tizimlarni chuqur tushunadigan mutaxassislarimiz bank talablari va xavfsizlik standartlarini mukammal biladi.",
      bankImages: [Agrobank, Toshkent, moliya],
      chartType: "bankImages",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Real loyihalar",
      description:
        "LenguaStory-AI startup asoschisi va bir qancha AI loyihalarida qatnashgan jamoamiz. Sun'iy intellekt sohasida 10+ dan ortiq muvaffaqiyatli loyihalar amalga oshirgan mutaxassislarimiz g'oyalarni real mahsulotga aylantirishni biladi.",
      projectImages: [proj1, proj2, proj3, proj4],
      chartType: "projectImages",
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 border border-green-500/30 p-3 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-gray-900 dark:text-white font-bold text-sm mb-2">
            {label}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}:{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {entry.value}
                {entry.name === "level" ? "%" : ""}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = (type: string, data: any[]) => {
    switch (type) {
      case "radar":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={data}>
              <PolarGrid stroke="currentColor" className="text-gray-300 dark:text-gray-600" />
              <PolarAngleAxis
                dataKey="name"
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-200 font-bold text-xs"
                tick={{ fill: "currentColor", fontSize: 12, fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                stroke="currentColor"
                className="text-gray-500 dark:text-gray-400"
                fontSize={10}
              />
              <Radar
                name="Mahorat darajasi"
                dataKey="level"
                stroke="#10b981"
                strokeWidth={3}
                fill="#10b981"
                fillOpacity={0.5}
                dot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }: { name?: string; percent?: number }) =>
                  `${name || ""} ${((percent || 0) * 100).toFixed(0)}%`
                }>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                className="text-gray-300 dark:text-gray-600"
              />
              <XAxis
                dataKey="year"
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-200 font-medium"
                fontSize={11}
              />
              <YAxis
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-200 font-medium"
                fontSize={11}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="projects" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="team" fill="#059669" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                className="text-gray-300 dark:text-gray-600"
              />
              <XAxis
                dataKey="month"
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-200 font-medium"
                fontSize={11}
              />
              <YAxis
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-200 font-medium"
                fontSize={11}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="success"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: "#10b981", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "certificates":
        return (
          <div className="grid grid-cols-3 gap-2 p-2">
            {data.map((cert: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-1 left-1 right-1">
                    <p className="text-white text-xs font-semibold text-center">
                      Sertifikat {index + 1}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "bankImages":
        return (
          <div className="grid grid-cols-3 gap-3 p-2">
            {data.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Bank Experience ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-1 left-1 right-1">
                    <p className="text-white text-xs font-semibold text-center">
                      {index === 0 ? "Agrobank" : index === 1 ? "Toshkent" : "Moliya"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "projectImages":
        return (
          <div className="grid grid-cols-2 gap-3 p-2">
            {data.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-semibold text-center">
                      AI Project {index + 1}
                    </p>
                    <p className="text-white/80 text-xs text-center mt-1">
                      {index === 0 ? "LenguaStory-AI" : index === 1 ? "ChatBot System" : index === 2 ? "ML Platform" : "AI Analytics"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="why-us"
      className="relative w-full py-24 bg-background from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden mt-12">
      {/* Background Glows - Agrobank colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 dark:bg-green-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-300/5 dark:bg-emerald-300/2 blur-[100px] rounded-full pointer-events-none animate-float" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 border border-green-500/30 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}>
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-600 dark:text-green-400 font-semibold">
                Nega aynan biz?
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <span className="text-gray-900 dark:text-white">
                Bu muammoni hal qila oladigan{" "}
              </span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                yagona jamoa
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              6 kishilik professional jamoamizning har bir a'zosi o'z
              yo'nalishida yetakchi mutaxassis. Bizning tajriba, texnik mahorat
              va real loyihalar ortidagi bilimimiz FiribLock AI ni eng yaxshi
              yechimga aylantirish kafolatidir.
            </motion.p>
          </div>

          {/* Strength Cards with Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-green-200 dark:border-green-700 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-green-600 dark:text-green-400">
                        {strength.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
                        {strength.description}
                      </p>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        Ko'rsatkichlar
                      </span>
                    </div>
                    {strength.chartType === "certificates" 
                    ? renderChart(strength.chartType, strength.certificates || [])
                    : strength.chartType === "bankImages"
                    ? renderChart(strength.chartType, strength.bankImages || [])
                    : strength.chartType === "projectImages"
                    ? renderChart(strength.chartType, strength.projectImages || [])
                    : renderChart(strength.chartType, strength.chartData || [])}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}>
            {[
              {
                value: "95%",
                label: "AI aniqligi",
                icon: <Brain className="w-5 h-5" />,
              },
              {
                value: "46+",
                label: "Muvaffaqiyatli loyiha",
                icon: <Trophy className="w-5 h-5" />,
              },
              {
                value: "6",
                label: "Mutaxassis",
                icon: <Users className="w-5 h-5" />,
              },
              {
                value: "4+",
                label: "Yillik tajriba",
                icon: <Award className="w-5 h-5" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <div className="flex justify-center text-green-600 dark:text-green-400 mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg">
              <Shield className="w-5 h-5" />
              <span>100% muvaffaqiyat kafolati</span>
              <Zap className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Biz ushbu muammoni hal qilish uchun yaratilganmiz
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
