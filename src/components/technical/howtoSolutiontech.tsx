import { TechnicalSolution } from "./TechSolution";
import { TechStack } from "./Techstack";
import { AIImplementation } from "./AiImplementation";
import { Shield } from "lucide-react";

const HowToSolutionTech = () => {
  return (
    <div>
      <section
        id="texnologiya"
        className="bg-linear-to-br pt-24 from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/30 backdrop-blur-sm">
                <Shield className="w-3 h-3 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Texnologiya va Yechim
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Qanday ishlaydi </span>
              <span className="bg-linear-to-r from-primary to-emerald-400 bg-clip-text text-transparent">AI Muhofiz?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              O'zbekistonda birinchi on-device antifrod AI tizimi - Agrobank mijozlarini 
              telefon firibgarligidan real vaqtda himoya qiladi
            </p>
          </div>

          <div className="space-y-20">
            {/* Technical approach */}
            <TechnicalSolution />

            {/* Tech stack */}
            <TechStack />

            {/* AI Implementation */}
            <AIImplementation />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToSolutionTech;
