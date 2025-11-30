import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, CreditCard, PhoneOff } from "lucide-react";
import { ProblemBackground } from "./ProblemBackground";
import { StatCard } from "./Statcard";
import { FraudChart } from "./FraudChart";
// import { ProblemCards } from "./ProblemCardsts";

export const Problem = () => {
  return (
    <section
      id="problem-solution"
      className="relative w-full py-24 overflow-hidden bg-background">
      <ProblemBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Firibgarlik </span>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                nazoratdan chiqdi
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O'zbekistonda kiberjinoyatchilik va telefon firibgarligi
              yildan-yilga keskin oshib bormoqda. Oddiy himoya choralari endi
              yetarli emas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Column: Stats - 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              value="46,000+"
              label="Umumiy kiberjinoyatchilik"
              icon={<AlertTriangle className="w-6 h-6" />}
              delay={0.1}
            />
            <StatCard
              value="1.2 trillion so'm"
              label="Umumiy moliyaviy zarar"
              icon={<TrendingUp className="w-6 h-6" />}
              delay={0.2}
            />
            <StatCard
              value="98%"
              label="Bank kartalari bilan bog'liq"
              icon={<CreditCard className="w-6 h-6" />}
              delay={0.3}
            />
            <StatCard
              value="70%"
              label="Qo'ng'iroqlar asosida kiberjinoyatchilik"
              icon={<PhoneOff className="w-6 h-6" />}
              delay={0.4}
            />
          </div>

          {/* Right Column: Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full flex items-center justify-center">
            <FraudChart />
          </motion.div>
        </div>

        {/* Problem Cards */}
        {/* <ProblemCards /> */}
      </div>
    </section>
  );
};
