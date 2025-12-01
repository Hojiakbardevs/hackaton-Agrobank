import { CheckCircle2, Rocket, Zap, Target } from "lucide-react";

const stages = [
  {
    stage: "Prototip",
    status: "current",
    badge: "HOZIR",
    description: "On-device ASR ishlayapti. Whisper Tiny mobilga moslangan.",
    bullets: [
      "Call API + ASR pipeline ishlaydi",
      "Risk-score modeli skeleton",
      "UI ogohlantirish prototipi",
    ],
    icon: Zap,
    progress: 40,
    color: "from-emerald-500 to-green-600",
  },
  {
    stage: "MVP",
    status: "next",
    badge: "KEYINGI",
    description: "To'liq ishlaydigan on-device antifrod MVP.",
    bullets: [
      "ASR → NLP → Risk Engine",
      "0–100 risk-score",
      "UI real-vaqt ogohlantirish",
    ],
    icon: Rocket,
    progress: 0,
    color: "from-emerald-600 to-green-600",
  },
  {
    stage: "Pilot",
    status: "planned",
    badge: "REJALASHTIRILGAN",
    description: "Agrobank bilan 3 haftalik test.",
    bullets: [
      "Real qo'ng'iroqlar testlari",
      "Deepfake detection",
      "KPI & false-positive tahlil",
    ],
    icon: Target,
    progress: 0,
    color: "from-green-600 to-emerald-600",
  },
  {
    stage: "Launch",
    status: "future",
    badge: "KELAJAK",
    description: "Banklar va operatorlar bilan ishga tushirish.",
    bullets: ["Flutter SDK", "Risk paneli", "TV/PR uchun demo"],
    icon: CheckCircle2,
    progress: 0,
    color: "from-emerald-500 to-emerald-600",
  },
];

export function RoadmapStages() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stages.map((item, i) => {
        const Icon = item.icon;
        const isCurrent = item.status === "current";

        return (
          <div
            key={i}
            className={`relative group transition-all duration-300 ${
              isCurrent ? "lg:col-span-1 md:col-span-2" : ""
            }`}>
            {/* Glow effect for current stage */}
            {isCurrent && (
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))`,
                }}></div>
            )}

            <div
              className={`h-full rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm
                ${
                  isCurrent
                    ? "bg-linear-to-br from-emerald-500/15 to-green-600/5 border-emerald-500/50 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/10"
                    : "bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-white/90 dark:hover:bg-gray-800/70"
                }
              `}>
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3
                          ${
                            isCurrent
                              ? "bg-emerald-500/30 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/50 dark:border-emerald-500/50"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                          }
                        `}>
                        {item.badge}
                      </span>
                      <h3 className="text-xl font-bold">{item.stage}</h3>
                    </div>
                    <Icon
                      className={`w-6 h-6 opacity-60 transition-all ${
                        isCurrent
                          ? "text-emerald-500 dark:text-emerald-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="flex-1 mb-6 space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <div key={j} className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Progress
                    </p>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {item.progress}%
                    </p>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 bg-linear-to-r ${item.color}`}
                      style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
