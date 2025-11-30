import { motion } from 'framer-motion';
import { Code, Smartphone, Shield, Building2, Briefcase, Users } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import Hojiakbar from "@/assets/hojiakbar.jpg"
import Azizbek from "@/assets/aziz.png"
import Abulqosim from "@/assets/abulqosim.png"
import Husan from "@/assets/jasurbek.png"
import Marjon from "@/assets/marjona.png"
import Hulqaru from "@/assets/hulqaru.png"

const teamMembers = [
    {
        name: "Abdulhakimov Hojiakbar",
        role: "Founder & Frontend Lead",
        icon: <Code className="w-8 h-8" />,
        image: Hojiakbar,
        description:
            "FiribLock AI jamoasining texnik yetakchisi. Frontend, UI/UX va SDK integratsiyasi uchun javobgar.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX"],
        links: {
            linkedin: "https://linkedin.com/in/...", // bu yerga haqiqiy linklarni qo'yasiz
            github: "https://github.com/...",
        },
        featured: true,
    },
    {
        name: "Azizbek",
        role: "Mobile Engineer (Flutter)",
        icon: <Smartphone className="w-8 h-8" />,
        image: Azizbek,
        description:
            "Android/iOS ilovalarini va on-device antifrod SDK integratsiyasini ishlab chiqadi.",
        skills: ["Flutter", "Dart", "Android", "iOS", "SDK integratsiya"],
        links: {
            linkedin: "https://linkedin.com/in/...",
            github: "https://github.com/...",
        },
    },
    {
        name: "Abulqosim",
        role: "AI & ML Core",
        icon: <Users className="w-8 h-8" />,
        image: Abulqosim,
        description:
            "Whisper Tiny asosida nutqni tahlil qilish, risk-score modeli va on-device optimizatsiya uchun javobgar.",
        skills: ["Python", "PyTorch", "Whisper", "Audio ML", "On-device AI"],
        links: {
            linkedin: "https://linkedin.com/in/...",
            github: "https://github.com/...",
        },
    },
    {
        name: "Jasurbek",
        role: "Fraud & Risk Specialist",
        icon: <Shield className="w-8 h-8" />,
        image: Jasur,
        description:
            "Bank antifrod jarayonlari, risk siyosati va regulyator talablari bo'yicha maslahatchi.",
        skills: ["Fraud detection", "Risk management", "AML/KYC", "PDn qonuni"],
        links: {
            linkedin: "https://linkedin.com/in/...",
        },
    },
    {
        name: "Marjona",
        role: "Fintech Operations",
        icon: <Building2 className="w-8 h-8" />,
        image: Marjon,
        description:
            "Bank ichki jarayonlari, call-markazlar va mijozlar bilan ishlash mexanikasini jamoaga tushuntiradi.",
        skills: ["Operations", "Bank processes", "Call-center", "Customer success"],
        links: {
            linkedin: "https://linkedin.com/in/...",
        },
    },
    {
        name: "Project Manager",
        role: "Product & Delivery",
        icon: <Briefcase className="w-8 h-8" />,
        description:
            "Sprintlar, roadmap, pilotlar va banklar bilan uchrashuvlarni boshqaradi.",
        skills: ["Agile", "Scrum", "Roadmap", "Stakeholder management"],
        links: {
            linkedin: "https://linkedin.com/in/...",
        },
    },
];

export const Team = () => {
    return (
        <section className="relative w-full py-24 bg-obsidian overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-white">Bizning </span>
                        <span className="text-gradient">Jamoa</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        6 kishilik professional fintech va antifrod tajribaga ega jamoa.
                        Har bir a’zo o‘z yo‘nalishida chuqur ekspert va Agrobank + AI Muhofiz loyihasiga bevosita hissa qo‘shadi.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={member.name}
                            delay={index * 0.1}
                            {...member}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
