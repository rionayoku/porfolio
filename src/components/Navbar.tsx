import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);
    
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    const DesktopNavLinks: React.FC = () => (
        <ul className="flex list-none gap-10 items-center">
            {navLinks.map(({ href, label }) => (
                <li key={href}>
                    <a
                        href={href}
                        onClick={handleScrollClick}
                        className="text-[#e0e6ed] no-underline font-medium transition-all duration-300 relative py-1 font-['Poppins'] text-[0.9rem] tracking-[1px] hover:text-[#00d9ff] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#00d9ff] after:to-[#8b5cf6] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    );

    const MobileNavLinks: React.FC = () => (
        <ul className="flex flex-col items-center justify-center h-full list-none gap-8">
            {navLinks.map(({ href, label }) => (
                <li key={href}>
                    <a href={href} onClick={handleScrollClick} className="text-2xl text-[#e0e6ed] no-underline font-medium transition-colors duration-300 font-['Poppins'] tracking-[1px] hover:text-[#00d9ff]">
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[1000] py-5 border-b border-[rgba(255,255,255,0.1)] transition-all duration-300 ${isScrolled ? 'bg-[rgba(10,14,26,0.95)] shadow-[0_5px_20px_rgba(0,0,0,0.3)]' : 'bg-[rgba(10,14,26,0.8)]'}`} style={{ backdropFilter: 'blur(10px)' }}>
                <div className="max-w-[1400px] mx-auto px-[30px] flex justify-between items-center">
                    <a href="#home" onClick={handleScrollClick} className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-[#00d9ff] no-underline" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}>
                        MarioYoku
                    </a>
                    <div className="hidden md:flex">
                        <DesktopNavLinks />
                    </div>
                    <button className="md:hidden bg-none border-none text-[#e0e6ed] text-2xl cursor-pointer z-[2001]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-[1999]"
                            style={{ backdropFilter: 'blur(5px)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[rgba(10,14,26,0.8)] border-l border-white/10 z-[2000] p-8 flex flex-col"
                            style={{ backdropFilter: 'blur(10px)' }}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <MobileNavLinks />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
