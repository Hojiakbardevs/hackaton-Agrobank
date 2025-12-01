import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
    delay?: number;
}

export const StatCard = ({ value, label, icon, delay = 0 }: StatCardProps) => {
    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-red-500 via-orange-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md" />

            {/* Card content */}
            <div className="relative h-full bg-card/95 backdrop-blur-xl rounded-2xl p-8 border border-border overflow-hidden">
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating particles effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 delay-100" />

                <div className="relative z-10">
                    {/* Icon */}
                    {icon && (
                        <motion.div
                            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-red-500/10 to-orange-500/10 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            {icon}
                        </motion.div>
                    )}

                    {/* Value with gradient */}
                    <motion.h3
                        className="text-5xl md:text-4xl font-bold mb-3 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-500"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: delay + 0.2 }}
                    >
                        {value}
                    </motion.h3>

                    {/* Label */}
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {label}
                    </p>
                </div>

                {/* Animated corner accent */}
                <motion.div
                    className="absolute top-0 right-0 w-20 h-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.4 }}
                >
                    <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-l from-red-500 to-transparent" />
                    <div className="absolute top-0 right-0 w-1 h-full bg-linear-to-b from-red-500 to-transparent" />
                </motion.div>
            </div>
        </motion.div>
    );
};
