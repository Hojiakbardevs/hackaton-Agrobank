import { motion } from "framer-motion";
import { PhoneCall, Shield, Brain, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Problem 1 Data - Fraud growth over years
const fraudGrowthData = [
  { year: "2023", cases: 12000, damage: 400 },
  { year: "2024", cases: 28000, damage: 800 },
  { year: "2025", cases: 46000, damage: 1200 },
];

// Problem 2 Data - Accuracy comparison
const accuracyData = [
  { name: "Truecaller", accuracy: 45 },
  { name: "Kaspersky", accuracy: 52 },
  { name: "Google Phone", accuracy: 48 },
  { name: "AI Muhofiz", accuracy: 94 },
];

// Problem 3 Data - Attack type radar
const attackRadarData = [
  { type: "Deepfake", threat: 85, fullMark: 100 },
  { type: "Operator", threat: 90, fullMark: 100 },
  { type: "Kod so'rash", threat: 95, fullMark: 100 },
  { type: "Raqam", threat: 70, fullMark: 100 },
  { type: "Psixologik", threat: 88, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-red-500/30 p-3 rounded-lg shadow-xl backdrop-blur-md">
        <p className="text-foreground font-bold text-sm">
          {payload[0].payload.name ||
            payload[0].payload.year ||
            payload[0].payload.type}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}:{" "}
            <span className="font-bold text-foreground">
              {entry.value}
              {entry.name === "accuracy" ? "%" : ""}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ProblemCards = () => {
  return (
    <>
      {/* Problem Cards with Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Problem 01 - Fraud Growth Chart */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -8 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60" />

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 text-red-500">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  01
                </span>
              </div>
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              Telefon firibgarligi portladi
            </h3>

            {/* Chart */}
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fraudGrowthData}>
                  <defs>
                    <linearGradient
                      id="colorCasesRed"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#EF4444"
                        stopOpacity={0.3}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="currentColor"
                    className="text-border opacity-20"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="year"
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(239, 68, 68, 0.1)" }}
                  />
                  <Bar
                    dataKey="cases"
                    fill="url(#colorCasesRed)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• 46,000+ firibgarlik holati</p>
              <p>• 1.2 trillion so'm zarar</p>
              <p>• 70% telefon orqali</p>
            </div>
          </div>
        </motion.div>

        {/* Problem 02 - Accuracy Comparison Chart */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -8 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60" />

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 text-red-500">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  02
                </span>
              </div>
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              Xalqaro yechimlar ishlamaydi
            </h3>

            {/* Chart */}
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accuracyData}>
                  <defs>
                    <linearGradient
                      id="colorAccuracyOrange"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.9} />
                      <stop
                        offset="95%"
                        stopColor="#F97316"
                        stopOpacity={0.3}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="currentColor"
                    className="text-border opacity-20"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ stroke: "#F97316", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#F97316"
                    strokeWidth={3}
                    dot={{ fill: "#F97316", r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Bulutga bog'liq</p>
              <p>• O'zbek tilida past aniqlik</p>
              <p>• Maxfiylik muammolari</p>
            </div>
          </div>
        </motion.div>

        {/* Problem 03 - Attack Type Radar */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -8 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60" />

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 text-red-500">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  03
                </span>
              </div>
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
              Ijtimoiy muhandislik xavfi
            </h3>

            <div className="h-64 mb-4 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={attackRadarData}>
                  <PolarGrid
                    stroke="currentColor"
                    className="text-border opacity-30"
                  />
                  <PolarAngleAxis
                    dataKey="type"
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={10}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    stroke="currentColor"
                    className="text-muted-foreground"
                    fontSize={10}
                  />
                  <Radar
                    name="Xavf darajasi"
                    dataKey="threat"
                    stroke="#EF4444"
                    fill="#EF4444"
                    fillOpacity={0.5}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Deepfake ovoz klonlari</p>
              <p>• Operator taqlidi</p>
              <p>• Psixologik bosim</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
