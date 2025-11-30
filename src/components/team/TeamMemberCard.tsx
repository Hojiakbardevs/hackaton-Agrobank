import React from "react";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  icon: React.ReactNode;
  image?: string; // rasm uchun yangi prop
  description?: string;
  skills?: string[];
  links?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  delay?: number;
  featured?: boolean;
}

export const TeamMemberCard = ({
  name,
  role,
  icon,
  image,
  description,
  skills = [],
  links,
  delay = 0,
  featured = false,
}: TeamMemberCardProps) => {
  return (
    <motion.div
      className={[
        "group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
        "bg-white/80 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-800/70",
        featured
          ? "border-primary/70 dark:border-primary/50 shadow-[0_0_30px_rgba(0,204,105,0.35)] dark:shadow-[0_0_30px_rgba(0,204,105,0.25)]"
          : "hover:border-primary/50 dark:hover:border-primary/40 hover:shadow-[0_0_18px_rgba(0,204,105,0.25)] dark:hover:shadow-[0_0_18px_rgba(0,204,105,0.15)]",
      ].join(" ")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}>
      {/* hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 dark:from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Image centered at top */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-xl flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(0,204,105,0.4)] transition-all duration-300 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                {icon}
              </div>
            )}
          </div>
        </div>

        {/* Name and role centered */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
            {name}
          </h3>
          <p className="text-base text-primary dark:text-primary font-semibold">
            {role}
          </p>
        </div>

        {/* description */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-center">
            {description}
          </p>
        )}

        {/* skills tags centered */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 rounded-full text-[11px] bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* push links to bottom - centered */}
        <div className="mt-auto pt-3 border-t border-gray-300 dark:border-gray-700 flex flex-wrap gap-3 text-xs justify-center">
          {links?.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary hover:text-gray-900 dark:hover:text-primary/80 underline underline-offset-2 transition-colors">
              LinkedIn
            </a>
          )}
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary hover:text-gray-900 dark:hover:text-primary/80 underline underline-offset-2 transition-colors">
              GitHub
            </a>
          )}
          {links?.portfolio && (
            <a
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-primary hover:text-gray-900 dark:hover:text-primary/80 underline underline-offset-2 transition-colors">
              Portfolio
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
