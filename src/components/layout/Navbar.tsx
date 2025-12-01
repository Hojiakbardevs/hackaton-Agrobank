import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../theme-provider";
import { Link } from "react-router-dom";

// Logotiplarni import qilish
import FiriblockLight from "@/assets/firiblock.svg";
import FiriblockDark from "@/assets/firiblock_light.svg";
import AgrobankLight from "@/assets/Agrobank.svg";
import AgrobankDark from "@/assets/Agrobank_light.svg";
import TDIUDark from "@/assets/tdiu.svg";
import TDIULight from "@/assets/tdiu_light.svg";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Muammo va Yechim", href: "#problem-solution" },
    { name: "Jamoa haqida", href: "#team" },
    { name: "Nega biz", href: "#why-us" },
    { name: "Yo'l xaritasi", href: "#roadmap" },
    { name: "Qanday hal qilamiz", href: "#texnologiya" },
  ];

  // Logotiplarni theme ga qarab tanlash
  const firiblockLogo = theme === "dark" ? FiriblockDark : FiriblockLight;
  const agrobankLogo = theme === "dark" ? AgrobankDark : AgrobankLight;
  const tdiuLogo = theme === "dark" ? TDIUDark : TDIULight;

  return (
    <nav
      className={`navbar-top fixed left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg py-3 border-border shadow-lg opacity-95 translate-y-0"
          : "bg-transparent py-6 border-transparent opacity-100 translate-y-0"
      }`}>
      <div className="container mx-auto px-4 flex flex-col justify-between items-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 my-5 w-full">
          <div className="flex items-center gap-5 sm:gap-8 md:gap-10 flex-1 justify-center">
            <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img
                src={firiblockLogo}
                alt="AI Muhofiz"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </Link>

            <div className="h-4 sm:h-5 md:h-6 w-px bg-border"></div>

            <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img
                src={agrobankLogo}
                alt="Agrobank"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </Link>

            <div className="h-4 sm:h-5 md:h-6 w-px bg-border"></div>

            <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img
                src={tdiuLogo}
                alt="TDIU"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button className="size-lg font-semibold">Demo Ko'rish</Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <hr className="w-full border-border" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 w-full justify-center py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide cursor-pointer">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 backdrop-blur-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg text-foreground hover:text-primary font-medium border-border outline-ring/50 cursor-pointer">
              {link.name}
            </a>
          ))}
          <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/20">
            Demo Ko'rish
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
