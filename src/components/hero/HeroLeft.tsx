
import { useAnalytics } from '@/hooks/useAnalytcs';
import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Activity } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export const HeroLeft = () => {
    const { trackEvent } = useAnalytics();

    return (
        <div className="flex flex-col justify-center items-start z-10 max-w-xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge variant="default" className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/5 text-primary">
                    <Shield className="w-3 h-3 mr-2 inline-block text-primary" />
                    O‘zbekistonda birinchi on-device antifrod AI
                </Badge>
            </motion.div>

            <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="text-chart-4 block">Firibgarlik</span>
                <span className="text-chart-4 block">qo‘ng‘iroqlarini</span>
                <span className="text-gradient block mt-2">AI Orqali To‘xtating.</span>
            </motion.h1>

            <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                FiribLock AI — 100% on-device (telefonda ishlovchi) sun’iy intellekt moduli.
                Internet shart emas, shaxsiy ma’lumotlar bulutga yuborilmaydi.
            </motion.p>

            <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Button
                    size="lg"
                    onClick={() => trackEvent('cta_click', { location: 'hero', label: 'start_demo' })}
                >
                    Demoni Boshlash
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => trackEvent('download_pitch_deck', { location: 'hero' })}
                >
                    PDF Ta’qdimot
                </Button>
            </motion.div>

            <motion.div
                className="flex items-center gap-6 text-sm text-gray-500 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
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
