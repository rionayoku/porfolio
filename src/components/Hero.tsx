import React from 'react';
import { motion } from 'framer-motion';
import { WordRotate } from './WordRotate';
import AboutMeContent from './AboutMeContent';

const ICONS_ROW1 = [
    `${import.meta.env.BASE_URL}src/images/tech-icons/Mikrotik.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/ubiquiti.svg`,    
    `${import.meta.env.BASE_URL}src/images/tech-icons/cacti_logo.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/oracle-1.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Truenas.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/ibm.svg`
];

const ICONS_ROW2 = [
    `${import.meta.env.BASE_URL}src/images/tech-icons/ubuntu-4.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/python-5.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Nextjs.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/proxmox.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/zabbix-1.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/docker-4.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/Vite.svg`,
    `${import.meta.env.BASE_URL}src/images/tech-icons/telkomsel-new-logo-2021.svg`
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
        <section id="home" className="text-slate-100 overflow-hidden relative">
            <div className="relative z-10 flex flex-col text-center" style={{ padding: '20px', paddingBottom: '60px' }}>
                <div className="max-w-4xl mx-auto" style={{ marginTop: '80px' }}>
                    <motion.p
                        className="font-['Poppins'] text-[clamp(1rem,4vw,2.2rem)] text-slate-300 mb-2 font-bold tracking-[3px] uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        IT Network & Systems Engineer
                    </motion.p>
                    <motion.div
                        className="mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <WordRotate
                            words={[
                                "Data Center Operations",
                                "IT Infrastructure Specialist",
                                "System Administration",
                                "Network Monitoring & Automation",
                                "Network & Security Implementation",
                                "Enterprise Technical Support"
                            ]}
                            className="font-['Poppins'] font-bold uppercase tracking-wider text-lg md:text-xl lg:text-2xl text-gradient"
                        />
                    </motion.div>
                    <AboutMeContent />
                </div>

                <motion.div
                    className="relative pb-1 w-full max-w-6xl mx-auto mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    style={{
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
                        className="flex gap-6 md:gap-10 whitespace-nowrap mt-2"
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
