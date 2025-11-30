import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-amber-50 dark:bg-gray-900" />

      {/* Agrobank neon glow effects -适度的 */}
      {/* Top right diagonal glow */}
      <div className="absolute -top-[10%] -right-[5%] w-[35%] h-[35%] bg-gradient-to-br from-primary/25 to-primary/10 blur-[140px] rounded-full animate-pulse" />

      {/* Bottom left corner glow */}
      <div
        className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] bg-gradient-to-tr from-primary/20 to-primary/8 blur-[130px] rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Top center floating glow */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[25%] h-[25%] bg-primary/6 blur-[100px] rounded-full opacity-70 animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Right side vertical glow */}
      <div
        className="absolute top-1/2 -right-[8%] -translate-y-1/2 w-[20%] h-[40%] bg-gradient-to-l from-primary/15 to-transparent blur-[120px] rounded-full opacity-60"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Bottom center subtle glow */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[45%] h-[20%] bg-primary/4 blur-[160px] rounded-full opacity-50" />

      {/* Animated Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="mesh-grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse">
            <motion.path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(0, 204, 105, 0.15)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
            <circle cx="0" cy="0" r="1.5" fill="rgba(0, 204, 105, 0.2)" />
            <circle cx="80" cy="0" r="1.5" fill="rgba(0, 204, 105, 0.2)" />
            <circle cx="0" cy="80" r="1.5" fill="rgba(0, 204, 105, 0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-grid)" />
      </svg>

      {/* Glowing Orbs - Orbital Animation */}
      {[...Array(8)].map((_, i) => {
        const size = Math.random() * 60 + 40; // 40-100px
        const duration = Math.random() * 15 + 20; // 20-35s
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, rgba(0, 204, 105, ${
                Math.random() * 0.3 + 0.2
              }) 0%, transparent 70%)`,
              filter: `blur(${Math.random() * 20 + 15}px)`,
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              scale: [0.8, 1.2, 0.8],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
};
