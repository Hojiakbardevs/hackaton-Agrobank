import { Code2, Cpu, Shield, Zap } from "lucide-react";

const weeks = [
  {
    week: "1-hafta",
    title: "Model tanlash",
    subtitle: "Model & API",
    bullets: [
      "Whisper Tiny mobilga optimizatsiya",
      "Call API sinovlari",
      "Modelni quantization qilish (int8)",
    ],
    icon: Cpu,
    tech: ["Whisper", "ONNX", "TensorFlow"],
    progress: 100,
  },
  {
    week: "2-hafta",
    title: "ASR Pipeline",
    subtitle: "Audio → Matn",
    bullets: [
      "Audio → ASR → Matn oqimi",
      "ONNX/TF Lite optimizatsiya",
      "Keyword detection (kod, SMS, karta)",
    ],
    icon: Zap,
    tech: ["Python", "ONNX", "NLP"],
    progress: 60,
  },
  {
    week: "3-hafta",
    title: "Risk Engine",
    subtitle: "AI + Features",
    bullets: [
      "Deepfake belgilari",
      "0–100 Risk-score algoritmi",
      "UI ogohlantirish dizayni",
    ],
    icon: Shield,
    tech: ["ML", "NLP", "React"],
    progress: 35,
  },
  {
    week: "4-hafta",
    title: "Beta Test",
    subtitle: "Testing & Demo",
    bullets: [
      "Real qo'ng'iroqlar test",
      "Performance tuning",
      "Demo video tayyorlash",
    ],
    icon: Code2,
    tech: ["Testing", "Optimization", "Demo"],
    progress: 10,
  },
];

export function SprintTimeline() {
  return (
    <div className="space-y-6">
      {/* Timeline header */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {weeks.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              {item.week}
            </p>
            <div className="h-1 rounded-full bg-gradient-to-r from-emerald-500/50 to-green-500/50"></div>
          </div>
        ))}
      </div>

      {/* Timeline cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeks.map((item, i) => {
          const Icon = item.icon;

          return (
            <div key={i} className="group">
              <div
                className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm
                hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 hover:bg-white/90 dark:hover:bg-gray-800/70">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Top section */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs font-semibold text-emerald-600/80 dark:text-emerald-400/80 uppercase tracking-wider mb-1">
                          {item.subtitle}
                        </p>
                        <h4 className="text-lg font-bold leading-tight text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <Icon className="w-5 h-5 text-emerald-500/60 dark:text-emerald-400/60 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors shrink-0" />
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="flex-1 space-y-3 mb-6">
                    {item.bullets.map((bullet, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0"></div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technology tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs rounded-md bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 dark:border-emerald-500/30 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="pt-4 border-t border-border/50 space-y-2">
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
                        className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-emerald-500 to-green-600"
                        style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result callout */}
      <div className="mt-8 p-6 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-green-500/10 dark:from-emerald-500/10 dark:to-green-500/10 backdrop-blur-sm">
        <p className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
          Natija:
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          MVP tayyor + Agrobank bilan bank pilotlari uchun yuboriladi. Aniqlik
          94–96%, false-positive ≤2%.
        </p>
      </div>
    </div>
  );
}
