import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { ModeToggle } from '../mode-toggle';
import { useTheme } from '../theme-provider';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Muammo', href: '#problem' },
        { name: 'Yechim', href: '#solution' },
        { name: 'Bozor', href: '#market' },
        { name: 'Jamoa', href: '#team' },
    ];

    // Logotiplarni theme ga qarab tanlash
    const firiblockLogoSrc = theme === 'light' ? '/src/assets/firiblock.svg' : '/src/assets/firiblock_light.svg';
    const agrobankLogoSrc = theme === 'light' ? '/src/assets/Agrobank.svg' : '/src/assets/Agrobank_light.svg';

    return (
        <nav
            className={`navbar-top fixed left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-background/90 backdrop-blur-lg py-3 border-border shadow-lg opacity-95 translate-y-0'
                : 'bg-transparent py-6 border-transparent opacity-100 translate-y-0'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* FiribLock Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <img src={firiblockLogoSrc} alt="FiribLock AI" className="h-8 w-auto transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-border hidden sm:block"></div>

                    {/* Agrobank Logo */}
                    <img src={agrobankLogoSrc} alt="Agrobank" className="h-8 w-auto transition-all duration-300" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ModeToggle />
                    <Button className="rounded-full font-semibold">
                        Demo Ko‘rish
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-muted-foreground hover:text-foreground">
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 backdrop-blur-xl animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg text-foreground hover:text-primary font-medium border-border outline-ring/50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/20">
                        Demo Ko‘rish
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
