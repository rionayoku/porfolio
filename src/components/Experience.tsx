import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
    shortLabel: string;
    date: string;
    title: string;
    company: string;
    description: string[];
}

const experienceData: ExperienceItem[] = [
    {
        shortLabel: 'TELKOMSEL TELECOMMUNICATION CENTER',
        date: 'June 2024 – Present',
        title: 'IT Infrastructure & Network Engineer',
        company: 'Telkomsel Telecommunication Center (via PT. Kinarya Utama Teknik & PT. Kinarya Alihdaya Mandiri)',
        description: [
            'Engineered and manage a Zabbix & Cacti monitoring suite, achieving 99.9% uptime visibility for mission-critical data center infrastructure.',
            'Developed a Python-based Telegram bot integrated with the Zabbix API, slashing incident response times by over 40% and improving team coordination.',
            'Administer a high-availability virtualization environment using VMware and Docker, and manage a robust TrueNAS SCALE backup system to guarantee business continuity.',
            'Lead hands-on technical support, vendor coordination, and troubleshooting for core network devices, servers, and power systems (UPS, PAC, Rectifier).',
        ]
    },
    { 
        shortLabel: 'PT Internusa', 
        date: '2020 – 2024', 
        title: 'IT Network Engineer', 
        company: 'PT Internusa Total Solution', 
        description: [
            'Designed and deployed Point-to-Multipoint (PtMP) wireless networks for key government contracts using Mikrotik & Ubiquiti, extending reliable connectivity across challenging terrains.', 
            'Architected and managed a secure NGINX reverse proxy and Proxmox-based virtual environment to host critical internal and client-facing web services.', 
            'Provided end-to-end network solutions for government projects, including internet service provisioning, domain/website hosting, and ongoing technical support.'
        ] 
    },
    { 
        shortLabel: 'IBM', 
        date: '2017 – 2020', 
        title: 'IT Support Engineer – Banking Devices', 
        company: 'PT Jasa Teknologi Informasi IBM', 
        description: [
            'Managed the full lifecycle of over 200 CRM/CDM banking machines (Hitachi, Wincor, Hyosung) for top-tier financial clients like Bank BCA and BNI.', 
            'Maintained a 99.5% operational uptime rate across a wide geographical territory by performing expert installation, preventive maintenance, and rapid troubleshooting.', 
            'Served as the primary technical point of contact for bank IT teams, ensuring swift issue resolution and maintaining high levels of client satisfaction.', 
            'Provided field support across 6 key remote locations, demonstrating reliability and technical autonomy.'
        ] 
    },
    { 
        shortLabel: 'Dispenda Jayapura', 
        date: 'Sep 2015 – Dec 2015', 
        title: 'IT Network Support – Project Role', 
        company: 'Dinas Pendapatan Kabupaten Jayapura', 
        description: [
            'Played a key role in a critical government tax system project by optimizing an Oracle 11g database to improve data retrieval speeds and reliability.', 
            'Enhanced system security and centralized user management by implementing Active Directory Domain Services on Windows Server 2008.', 
            'Configured and maintained Oracle Forms 6i, DNS services, and remote desktop connections to ensure seamless system operation for government staff.'
        ] 
    },
];

const Experience: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="text-[#64748b] text-lg md:text-xl font-light tracking-[1px]">Proven track record of engineering and maintaining robust IT infrastructure</p>
                </div>

                {/* Mobile Experience Navigation */}
                <div className="block md:hidden mb-8">
                    {/* Experience Counter & Navigation Hint */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                            <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
                            <span className="text-sm text-[#e0e6ed] font-medium">
                                Role {selectedTab + 1} of {experienceData.length}
                            </span>
                        </div>
                        <p className="text-xs text-[#64748b] mt-2 font-light">
                            Swipe or tap to explore all experiences
                        </p>
                    </div>

                    {/* Horizontal Scrollable Experience Cards */}
                    <div className="relative">
                        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
                            {experienceData.map((experience, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-64 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                        selectedTab === index
                                            ? 'border-[#00d9ff] bg-gradient-to-br from-[#00d9ff]/10 to-[#8b5cf6]/10 shadow-lg shadow-[#00d9ff]/20'
                                            : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                                    }`}
                                    onClick={() => setSelectedTab(index)}
                                    style={{ scrollSnapAlign: 'start' }}
                                >
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className={`w-3 h-3 rounded-full ${
                                                selectedTab === index ? 'bg-[#00d9ff] animate-pulse' : 'bg-white/30'
                                            }`}></div>
                                            <span className="text-xs text-[#64748b] font-medium">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="font-['Poppins'] text-sm font-bold text-[#e0e6ed] uppercase tracking-[0.5px] mb-2 line-clamp-2">
                                            {experience.shortLabel}
                                        </h3>
                                        <p className="text-xs text-[#64748b] mb-2 font-medium">
                                            {experience.date}
                                        </p>
                                        <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                                            {experience.description[0]}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => setSelectedTab(Math.max(0, selectedTab - 1))}
                            disabled={selectedTab === 0}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={() => setSelectedTab(Math.min(experienceData.length - 1, selectedTab + 1))}
                            disabled={selectedTab === experienceData.length - 1}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {experienceData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTab(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    selectedTab === index 
                                        ? 'bg-[#00d9ff] w-6' 
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 min-h-[450px]">
                    {/* Desktop Tabs Navigation */}
                    <div className="hidden md:flex w-full md:w-1/4">
                        <div className="relative flex flex-col w-full border-l-2 border-white/10">
                             {experienceData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`relative w-full text-left p-4 pr-8 transition-colors duration-300 ${selectedTab === index ? 'text-[#00d9ff]' : 'text-[#64748b] hover:bg-white/5 hover:text-[#e0e6ed]'}`}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    <span className="font-['Poppins'] font-semibold uppercase tracking-[1px]">{item.shortLabel}</span>
                                    {selectedTab === index && (
                                        <motion.div
                                            layoutId="active-experience-indicator"
                                            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#00d9ff] to-[#8b5cf6] z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="w-full md:w-3/4" style={{ perspective: '1200px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab}
                                initial={{ opacity: 0, rotateY: 20, scale: 0.95 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                exit={{ opacity: 0, rotateY: -20, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full"
                            >
                                <div>
                                    <h3 className="font-['Poppins'] text-2xl md:text-3xl font-bold mb-3 text-gradient">{experienceData[selectedTab].title}</h3>
                                    <p className="text-[#64748b] mb-1 text-lg">{experienceData[selectedTab].company}</p>
                                    <p className="block font-['Poppins'] text-[#00d9ff]/80 font-medium mb-6 text-base uppercase tracking-[1px]">{experienceData[selectedTab].date}</p>
                                    <ul className="list-none text-[#64748b] leading-relaxed relative z-10 space-y-3">
                                        {experienceData[selectedTab].description.map((desc, i) => (
                                            <li key={i} className="relative pl-7 before:content-['•'] before:absolute before:left-0 before:text-[#00d9ff] before:text-2xl before:leading-none">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;