import { useAnalytics } from "@/hooks/useAnalytcs";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Smartphone,
  Activity,
  FileText,
  Building2,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HeroLeft = () => {
  const { trackEvent } = useAnalytics();

  return (
    <div className="flex flex-col justify-center items-start z-10 max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <Badge
          variant="default"
          className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/5 text-primary">
          <Shield className="w-3 h-3 mr-2 inline-block text-primary" />
          O‘zbekistonda birinchi on-device antifrod AI
        </Badge>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-5xl font-bold leading-tight mb-6 font-display tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}>
        <span className="text-gray-800 dark:text-white block">
          Agrobank pulingizni ko'paytiradi.
        </span>
        <span className="bg-linear-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent block mt-2">
          AI Muhofiz Firibgarlarini yo'q qiladi.
        </span>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        AI Muhofiz 94–96% aniqlik bilan har bir qo'ng'iroq tahlil qilinadi.
        Shaxsiy ma'lumotlar telefonda qoladi, bulutga yuborilmaydi.
      </motion.p>

      {/* Features List */}
      

      <motion.div
        className="flex flex-wrap gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <Button
          size="lg"
          onClick={() =>
            trackEvent("cta_click", { location: "hero", label: "start_demo" })
          }>
          <Building2 className="w-4 h-4 mr-2" />
          Bankingiz uchun demoni so'rang
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() =>
            trackEvent("download_pitch_deck", { location: "hero" })
          }>
          <FileText className="w-4 h-4 mr-2" />
          PDF prezentatsiya
        </Button>
      </motion.div>

      <motion.div
        className="flex items-center gap-6 text-sm text-gray-500 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <span>94–96% aniqlik</span>
        </div>
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-primary" />
          <span>Maxfiylik 100%</span>
        </div>
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-primary" />
          <span>O‘zbek + Rus + English</span>
        </div>
      </motion.div>
    </div>
  );
};
