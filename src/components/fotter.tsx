import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../components/theme-provider";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Shield,
  ArrowRight,
} from "lucide-react";

// Logotiplarni import qilish
import FiriblockLight from "@/assets/firiblock.svg";
import FiriblockDark from "@/assets/firiblock_light.svg";
import AgrobankLight from "@/assets/Agrobank.svg";
import AgrobankDark from "@/assets/Agrobank_light.svg";
import TDIUDark from "@/assets/tdiu.svg";
import TDIULight from "@/assets/tdiu_light.svg";

export const Footer = () => {
  const { theme } = useTheme();

  // Logotiplarni theme ga qarab tanlash
  const firiblockLogo = theme === "dark" ? FiriblockDark : FiriblockLight;
  const agrobankLogo = theme === "dark" ? AgrobankDark : AgrobankLight;
  const tdiuLogo = theme === "dark" ? TDIUDark : TDIULight;

  const footerLinks = {
    product: [
      { name: "Qanday Ishlaydi", href: "/#how-solve" },
      { name: "Muammo va Yechim", href: "/#problem-solution" },
      { name: "Jamoa", href: "/#team" },
      { name: "Demo Ko'rish", href: "/contact" },
    ],
    company: [
      { name: "Biz Haqimizda", href: "/#team" },
      { name: "Nega Biz", href: "/#why-us" },
      { name: "Yo'l Xaritasi", href: "/#roadmap" },
      { name: "Bog'lanish", href: "/contact" },
    ],
    resources: [
      { name: "Texnologiya", href: "/#how-solve" },
      { name: "Xavfsizlik", href: "/#solution" },
      { name: "API", href: "#" },
      { name: "Hujjatlar", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://t.me",
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/5 dark:bg-emerald-400/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 dark:bg-green-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              {/* Logotiplar */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <Link
                  to="/"
                  className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <img
                    src={firiblockLogo}
                    alt="FiribLock AI"
                    className="h-6 sm:h-7 md:h-8 w-auto"
                  />
                </Link>

                <div className="h-4 sm:h-5 md:h-6 w-px bg-border"></div>

                <Link
                  to="/"
                  className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <img
                    src={agrobankLogo}
                    alt="Agrobank"
                    className="h-6 sm:h-7 md:h-8 w-auto"
                  />
                </Link>

                <div className="h-4 sm:h-5 md:h-6 w-px bg-border"></div>

                <Link
                  to="/"
                  className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
                  <img
                    src={tdiuLogo}
                    alt="TDIU"
                    className="h-6 sm:h-7 md:h-8 w-auto"
                  />
                </Link>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md leading-relaxed">
                AI Muhofiz — O'zbekistonda birinchi on-device antifrod AI
                tizimi. Agrobank mijozlarini firibgarlik qo'ng'iroqlaridan
                himoya qiladi.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <a
                    href="mailto:info@firiblock.ai"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    info@firiblock.ai
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <a
                    href="tel:+998901234567"
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    +998 90 123 45 67
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Toshkent, O'zbekiston</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Mahsulot
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Kompaniya
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Resurslar
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                © {new Date().getFullYear()} AI Muhofiz. Barcha huquqlar
                himoyalangan.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
