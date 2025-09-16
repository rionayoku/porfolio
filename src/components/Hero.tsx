import React from 'react';
import { motion } from 'framer-motion';
import { WordRotate } from './WordRotate';

const ICONS_ROW1 = [
    "/src/images/tech-icons/Mikrotik.svg",
    "/src/images/tech-icons/ubiquiti.svg",    
    "/src/images/tech-icons/cacti_logo.svg",
    "/src/images/tech-icons/oracle-1.svg",
    "/src/images/tech-icons/Truenas.svg",
    "/src/images/tech-icons/ibm.svg"
];

const ICONS_ROW2 = [
    "/src/images/tech-icons/ubuntu-4.svg",
    "/src/images/tech-icons/python-5.svg",
    "/src/images/tech-icons/Nextjs.svg",
    "/src/images/tech-icons/proxmox.svg",
    "/src/images/tech-icons/zabbix-1.svg",
    "/src/images/tech-icons/docker-4.svg",
    "/src/images/tech-icons/Vite.svg",
    "/src/images/tech-icons/telkomsel-new-logo-2021.svg"
];

const repeatedIcons = (icons: string[], repeat = 2) => Array.from({ length: repeat }).flatMap(() => icons);

const Hero: React.FC = () => {

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <section id="home" className="min-h-screen text-slate-100 overflow-hidden relative">
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-8 sm:py-8 md:px-16 md:py-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-['Poppins'] font-extrabold mb-5 leading-tight uppercase tracking-[-1px] text-[clamp(2.5rem,6vw,5rem)]">
                        <span className="text-gradient">
                            <span className="word-animate" data-delay="700">Mario</span> <span className="word-animate" data-delay="850">Yoku</span>
                        </span>
                    </h1>
                    <p className="font-['Poppins'] text-[clamp(1rem,4vw,2.2rem)] text-slate-300 mb-5 font-bold tracking-[3px] uppercase">
                        <span className="word-animate" data-delay="1000">IT</span> <span className="word-animate" data-delay="1100">Network</span> <span className="word-animate" data-delay="1200">&amp;</span> <span className="word-animate" data-delay="1300">Systems</span> <span className="word-animate" data-delay="1400">Engineer</span>
                    </p>
                    <div className="opacity-0 mb-8" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2.0s' }}>
                        <WordRotate
                            words={[
                                "Data Center Operations",
                                "Network Monitoring & Automation",
                                "Infrastructure Management",
                                "Network & Security Implementation",
                                "Enterprise Technical Support"
                            ]}
                            className="font-['Poppins'] font-bold uppercase tracking-wider text-lg md:text-xl lg:text-2xl text-gradient"
                        />
                    </div>
                    <div className="flex gap-5 flex-wrap justify-center opacity-0 mb-16" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2.2s' }}>
                        <a href="#experience" className="btn btn-primary" onClick={handleScrollClick}>
                            <i className="fa-solid fa-briefcase"></i> My Experience
                        </a>
                        <a href="#contact" className="btn btn-secondary" onClick={handleScrollClick}>
                            <i className="fa-solid fa-address-book"></i> Contact Info
                        </a>
                    </div>
                </div>

                <div 
                    className="relative pb-2 w-full max-w-6xl mx-auto opacity-0 mt-8"
                    style={{ 
                        animation: 'word-appear 1s ease-out forwards', 
                        animationDelay: '2.6s',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                >
                    <motion.div 
                        className="flex gap-6 md:gap-10 whitespace-nowrap"
                        animate={{ x: '-50%' }}
                        transition={{ ease: 'linear', duration: 60, repeat: Infinity, repeatType: 'loop' }}
                    >
                        {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
                        <div key={i} className="h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] shadow-md flex items-center justify-center p-2">
                            <img src={src} alt="Technology Icon" className="h-full w-full object-contain" />
                        </div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="flex gap-6 md:gap-10 whitespace-nowrap mt-6"
                        initial={{ x: '-50%' }}
                        animate={{ x: '0%' }}
                        transition={{ ease: 'linear', duration: 60, repeat: Infinity, repeatType: 'loop' }}
                    >
                        {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
                        <div key={i} className="h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] shadow-md flex items-center justify-center p-2">
                            <img src={src} alt="Technology Icon" className="h-full w-full object-contain" />
                        </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
