import React from 'react';
import { motion } from 'framer-motion';

const AboutMeContent: React.FC = () => {
    const handleProjectClick = (projectId: string) => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                const projectTab = document.querySelector(`[data-project-index="${projectId}"]`) as HTMLElement;
                if (projectTab) projectTab.click();
            }, 500);
        }
    };

    return (
        <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
            <div className="max-w-4xl mx-auto">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 lg:p-8 backdrop-blur-sm max-h-[60vh] md:max-h-none overflow-y-auto md:overflow-visible">
                                <h3 className="font-['Poppins'] text-lg md:text-xl lg:text-2xl text-slate-300 mb-4 md:mb-6 font-bold tracking-[1px] uppercase text-center">
                                    About Me
                                </h3>
                    <div className="text-[#e0e6ed] text-sm md:text-base lg:text-lg leading-relaxed">
                        <p className="text-left md:text-justify">
                            Hi, I'm Mario Harold Yoku—a passionate IT Network & Systems Engineer from Jayapura, Papua. My career has taken me on an exciting journey across Indonesian data center, islands, and even big events! From building robust network monitoring solutions with{' '}
                            <button
                                onClick={() => handleProjectClick('0')}
                                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors font-medium text-sm md:text-base"
                            >
                                Zabbix and Cacti
                            </button>
                            {' '}for Telkomsel networking core devices, Data Center HVAC, to rolling out wireless links between cities ({' '}
                            <button
                                onClick={() => handleProjectClick('3')}
                                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors font-medium text-sm md:text-base"
                            >
                                Wamena and Jayapura
                            </button>
                            ), and engineered wireless networks for{' '}
                            <button
                                onClick={() => handleProjectClick('1')}
                                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors font-medium text-sm md:text-base"
                            >
                                Jayapura-Sarmi-Mamberamo
                            </button>
                            , set up secure CCTV surveillance for{' '}
                            <button
                                onClick={() => handleProjectClick('2')}
                                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors font-medium text-sm md:text-base"
                            >
                                PON PAPUA 2020
                            </button>
                            , maintained banking CRM/CDM for{' '}
                            <button
                                onClick={() => handleProjectClick('6')}
                                className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors font-medium text-sm md:text-base"
                            >
                                IBM
                            </button>
                            , and even brought government tax systems online for Kabupaten Jayapura. Whether it's PTMP wireless deployments over tough terrains or keeping mission-critical systems up and running, I thrive on solving complex challenges and bringing reliable connectivity where it matters most.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMeContent;
