import React, { useState, useEffect } from 'react';

interface NavItem {
    id: string;
    label: string;
    icon: string;
}

const MobileNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems: NavItem[] = [
        { id: 'home', label: 'Home', icon: 'fa-home' },
        { id: 'projects', label: 'Projects', icon: 'fa-briefcase' },
        { id: 'skills', label: 'Skills', icon: 'fa-code' },
        { id: 'experience', label: 'Experience', icon: 'fa-user-tie' },
        { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
    ];

    // Handle active section detection
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(navItems[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Background with blur effect */}
            <div className="backdrop-blur-md bg-black/80 border-t border-white/10">
                <div className="flex items-center justify-around px-2 py-3">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors duration-200 min-w-[60px] ${
                                activeSection === item.id
                                    ? 'text-cyan-400 bg-cyan-400/10'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            <i className={`fas ${item.icon} text-lg mb-1`} />
                            <span className="text-xs font-medium">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
