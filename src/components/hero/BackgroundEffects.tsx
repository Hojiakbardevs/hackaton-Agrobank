import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Deep gradient background */}
            <div className="absolute inset-0 bg-obsidian" />

            {/* Radial glow top left */}
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full opacity-40" />

            {/* Radial glow bottom right */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full opacity-40" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [null, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};
