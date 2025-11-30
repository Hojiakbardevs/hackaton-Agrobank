import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Shield,
  Building2,
  Briefcase,
  Users,
} from "lucide-react";
import { TeamMemberCard } from "./TeamMemberCard";
import Hojiakbar from "@/assets/hojiakbar.jpg";
import Azizbek from "@/assets/aziz.png";
import Abulqosim from "@/assets/abulqosim.png";
import Husan from "@/assets/jasurbek.png";
import Marjon from "@/assets/marjona.png";
import Hulqaru from "@/assets/hulqarbonu.jfif";
import { HowToSolution } from "./howtoSolution";

const teamMembers = [
  {
    name: "Abdulhakimov Hojiakbar",
    role: "Founder & Frontend Lead",
    icon: <Code className="w-8 h-8" />,
    image: Hojiakbar,
    description:
      "Middle Frontend Software Engineer. 5 yil tajriba, dizayn, codlash, UI va AI yo'nalishlarida javobgar. Suniy intellekt tadqiqotlar institutida bosh mutaxassis.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX", "AI"],
    links: {
      linkedin: "https://www.linkedin.com/in/hojiakbardev/",
      github: "https://github.com/Hojiakbardevs",
    },
    featured: true,
  },
  {
    name: "Azizbek Xaitov",
    role: "Co-Founder & Startup Advisor",
    icon: <Building2 className="w-8 h-8" />,
    image: Azizbek,
    description:
      "5+ yil TDIU startap ekotizimida. Yangi g‘oyalarni tezkor validatsiya qilish, jamoalarni rivojlantirish, biznes modeli va moliyaviy strategiyalarni shakllantirish bo‘yicha amaliy ekspert.\n\nStack: FinTech, AgTech, EdTech, GovTech, Smart City, IoT (Internet of Things), GreenTech",
    skills: [
      "FinTech",
      "AgTech",
      "EdTech",
      "GovTech",
      "Smart City",
      "IoT",
      "GreenTech",
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/azizbek-khaitov/",
    },
  },
  {
    name: "Abulqosim Rafiqov",
    role: "Fullstack AI Engineer",
    icon: <Users className="w-8 h-8" />,
    image: Abulqosim,
    description:
      "4 yil tajribaga ega Fullstack AI Engineer. Nihol kompaniyasida Senior Software Engineer. Django, PostgreSQL, Machine Learning bo'yicha chuqur bilimga ega. RESTful API, optimizatsiya va test-driven development mutaxassisi.",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "Node.js",
      "Machine Learning",
      "AI/ML",
      "RESTful API",
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/abulqosim-rafiqov-97b594326/",
      github: "https://github.com/Abulqosim0227",
    },
  },
  {
    name: "Xusan Xukumov",
    role: "QA/Software Engineer",
    icon: <Shield className="w-8 h-8" />,
    image: Husan,
    description:
      "Evertech kompaniyasida QA/Software Engineer. 2 yil QA tajribasi, Flutter, Automation, Python, Java. GenAI va LLM fine-tuning bilan shug'ullanadi.",
    skills: ["Flutter", "QA Automation", "Python", "Java", "GenAI", "ML"],
    links: {
      github: "https://github.com/IamKhuk",
    },
  },
  {
    name: "Marjona Bobonazarova",
    role: "Junior AI Developer",
    icon: <Smartphone className="w-8 h-8" />,
    image: Marjon,
    description:
      "IDU universiteti talabasi, ML developer. Machine Learning va AI yo'nalishida o'qiydi va loyihalar bilan shug'ullanadi.",
    skills: ["Machine Learning", "Python", "AI/ML", "Data Science"],
    links: {
      linkedin: "https://www.linkedin.com/in/marjona-bobonazarova-35b617284/",
      github: "https://github.com/MARJONABOBONAZAROVA",
    },
  },
  {
    name: "Hulqaru Rustamova",
    role: "Junior Software Engineer",
    icon: <Briefcase className="w-8 h-8" />,
    image: Hulqaru,
    description:
      "Uzbek Industrial and Construction Bankda Project Management. LenguaStory-AI startup asoschisi. Toshkent Davlat Iqtisodiyot Universiteti.",
    skills: ["Angular", "Oracle", "Business Strategy", "Banking"],
    links: {
      linkedin: "https://www.linkedin.com/in/hulkarbonu-rustamova-9699a3338/",
    },
  },
];

export const Team = () => {
  return (
    <section className="relative w-full py-24 bg-linear-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <span className="text-gray-900 dark:text-white">Bizning </span>
            <span className="text-gradient">Jamoa</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            6 kishilik professional fintech va antifrod tajribaga ega jamoa. Har
            bir a'zo o'z yo'nalishida chuqur ekspert va Agrobank + AI Muhofiz
            loyihasiga bevosita hissa qo'shadi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} delay={index * 0.1} {...member} />
          ))}
        </div>
      </div>

      {/* <motion.div
        className="max-w-4xl mx-auto my-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Nega aynan bizning jamoamiz bu muammoni hal qila oladi?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  1
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  Agrobank UI tajribasi
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Agrobank interfeyslarini chuqur tushunamiz, bank talablarini
                  va foydalanuvchi tajribasini mukammal bilamiz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  2
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  AI mutaxassislari jamoasi
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Sun'iy intellekt tadqiqotlar instituti va Nihol kabi yetakchi
                  kompaniyalarda tajribaga ega AI mutaxassislari.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  3
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  Fullstack yechimlar
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Frontend, backend, mobile, AI - barcha texnologiyalar bo'yicha
                  chuqur bilimga ega jamoa.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  4
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  Bank sohasi tajribasi
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Banklar bilan to'g'ridan-to'g'ri ishlagan, moliyaviy
                  jarayonlarni yaxshi tushunadigan mutaxassislar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  5
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  Startup madaniyati
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  LenguaStory-AAI kabi startuplarni boshqargan, tez
                  o'zgarishlarga moslasha oladigan jamoa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center shrink-0 mt-1">
                <span className="text-primary dark:text-primary font-bold text-sm">
                  6
                </span>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                  Sertifikatlangan mutaxassislar
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  QA, PM, AI - har bir sohada professional sertifikatlar va real
                  loyihalar tajribasi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/contact" style={{ display: "inline-block" }}>
            <motion.button
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Jamoa bilan bog'lanish
            </motion.button>
          </Link>
        </div>
      </motion.div> */}


      <HowToSolution></HowToSolution>
      
    </section>
  );
};
