export const ProblemBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base background */}
            <div className="absolute inset-0 bg-background" />

            {/* Danger glow effects - subtle */}
            {/* Top left glow */}
            <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] bg-linear-to-br from-red-500/15 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/15 blur-[140px] rounded-full opacity-40" />

            {/* Bottom right glow */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-linear-to-tl from-orange-500/15 to-red-500/10 dark:from-orange-900/20 dark:to-red-900/15 blur-[140px] rounded-full opacity-40" />

            {/* Center subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-red-500/5 dark:bg-red-900/10 blur-[100px] rounded-full opacity-30" />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-linear(rgba(239, 68, 68, 0.3) 1px, transparent 1px), 
                           linear-linear(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    );
};
