import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EducationItem {
    shortLabel: string;
    icon: string;
    title: string;
    items: string[];
    website?: string;
    email?: string;
    phone?: string;
    location?: string;
    address?: string;
}

const educationData: EducationItem[] = [
    { shortLabel: 'Google Certs', icon: 'fa-certificate', title: 'Professional Certifications', items: ['Google IT Support Professional', 'Google Foundations of Cybersecurity', 'Google Connect and Protect: Networks and Network Security'] },
    { shortLabel: 'ACIT', icon: 'fa-graduation-cap', title: 'Australian College of Information Technology', items: ['Certificate IV in Telecommunications Network Engineering', 'Certificate IV in Information Technology Networking'], website: 'https://acit.edu.au/', email: 'connect@acit.edu.au', phone: '+61 7 5578 8122', location: 'Gold Coast, Queensland' },
    { shortLabel: 'ACTB', icon: 'fa-briefcase', title: 'Australian College of Technology and Business', items: ['Advanced Diploma of Management', 'Advanced Diploma of Marketing', 'Advanced Diploma of Business', 'Diploma of Management'], website: 'https://www.actb.com.au/', phone: '61 7 3852 6967', email: 'info@actb.com.au', address: '100 Brunswick Street, Fortitude Valley, Queensland 4006, Australia' },
    { shortLabel: 'Nudgee Int. College', icon: 'fa-language', title: 'Nudgee International College', items: ['Advanced English Language Skills (Level 2 to 5)'], address: '2199 Sandgate Road, Boondall QLD 4034' },
    { shortLabel: 'SMK N 1 Sentani', icon: 'fa-school', title: 'SMK Negeri 1 Sentani – Vocational High School', items: ['Major: Computer and Network Engineering (Teknik Komputer dan Jaringan)'], website: 'https://smkn1sentani.sch.id/', phone: '(0967) 593130', email: 'smkn1sentani@yahoo.com', address: 'Jl. Sekolah No.1, Desa Nendali, Kabupaten Jayapura, Indonesia – 99359' },
];

const Education: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleTabChange = (index: number) => {
        setSelectedTab(index);

        // Scroll the selected card into view in the horizontal list
        if (scrollContainerRef.current) {
            const selectedCard = scrollContainerRef.current.children[index] as HTMLElement;
            if (selectedCard) {
                const container = scrollContainerRef.current;
                const containerWidth = container.clientWidth;
                const cardWidth = selectedCard.offsetWidth;
                const cardLeft = selectedCard.offsetLeft;

                // Calculate the position to center the card in the container
                const targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

                container.scrollTo({
                    left: Math.max(0, targetScrollLeft),
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">Education &amp; Certifications</h2>                   
                </div>

                {/* Mobile Education Navigation */}
                <div className="block md:hidden mb-8">
                    {/* Education Counter & Navigation Hint */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                            <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
                            <span className="text-sm text-[#e0e6ed] font-medium">
                                Institution {selectedTab + 1} of {educationData.length}
                            </span>
                        </div>
                        <p className="text-xs text-[#64748b] mt-2 font-light">
                            Swipe or tap to explore all education
                        </p>
                    </div>

                    {/* Horizontal Scrollable Education Cards */}
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {educationData.map((education, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-64 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                        selectedTab === index
                                            ? 'border-[#00d9ff] bg-gradient-to-br from-[#00d9ff]/10 to-[#8b5cf6]/10 shadow-lg shadow-[#00d9ff]/20'
                                            : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                                    }`}
                                    onClick={() => handleTabChange(index)}
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
                                            {education.shortLabel}
                                        </h3>
                                        <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                                            {education.items.slice(0, 2).join(', ')}
                                            {education.items.length > 2 && '...'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => handleTabChange(Math.max(0, selectedTab - 1))}
                            disabled={selectedTab === 0}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => handleTabChange(Math.min(educationData.length - 1, selectedTab + 1))}
                            disabled={selectedTab === educationData.length - 1}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-[#0a0f1c] border border-white/20 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 text-[#e0e6ed]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {educationData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabChange(index)}
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
                             {educationData.map((edu, index) => (
                                <button
                                    key={index}
                                    className={`relative w-full text-left p-4 pr-8 transition-colors duration-300 ${selectedTab === index ? 'text-[#00d9ff]' : 'text-[#64748b] hover:bg-white/5 hover:text-[#e0e6ed]'}`}
                                    onClick={() => setSelectedTab(index)}
                                >
                                    <span className="font-['Poppins'] font-semibold uppercase tracking-[1px]">{edu.shortLabel}</span>
                                    {selectedTab === index && (
                                        <motion.div
                                            layoutId="active-education-indicator"
                                            className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#00d9ff] to-[#8b5cf6] z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Panel */}
                    <div className="w-full md:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full"
                            >
                                <div>
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-[60px] h-[60px] bg-gradient-to-tr from-[#00d9ff] to-[#8b5cf6] rounded-[15px] flex items-center justify-center text-3xl text-[#050714]">
                                            <i className={`fa-solid ${educationData[selectedTab].icon}`}></i>
                                        </div>
                                        <h3 className="font-['Poppins'] text-xl md:text-2xl font-semibold uppercase tracking-[1px]">{educationData[selectedTab].title}</h3>
                                    </div>
                                    <ul className="list-none space-y-3">
                                        {educationData[selectedTab].items.map((item, i) => (
                                            <li key={i} className="py-2 text-[#64748b] flex items-center gap-4 text-base relative pl-6 before:content-['▸'] before:absolute before:left-0 before:text-[#00d9ff] before:text-xl">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {(educationData[selectedTab].website || educationData[selectedTab].email || educationData[selectedTab].phone || educationData[selectedTab].location || educationData[selectedTab].address) && (
                                        <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                                            {educationData[selectedTab].website && (
                                                <div className="flex items-center gap-3 text-[#e0e6ed]">
                                                    <i className="fa-solid fa-globe text-[#00d9ff]"></i>
                                                    <a href={educationData[selectedTab].website} target="_blank" rel="noreferrer" className="hover:underline">
                                                        {educationData[selectedTab].website}
                                                    </a>
                                                </div>
                                            )}
                                            {educationData[selectedTab].email && (
                                                <div className="flex items-center gap-3 text-[#e0e6ed]">
                                                    <i className="fa-solid fa-envelope text-[#00d9ff]"></i>
                                                    <a href={`mailto:${educationData[selectedTab].email}`} className="hover:underline">
                                                        {educationData[selectedTab].email}
                                                    </a>
                                                </div>
                                            )}
                                            {educationData[selectedTab].phone && (
                                                <div className="flex items-center gap-3 text-[#e0e6ed]">
                                                    <i className="fa-solid fa-phone text-[#00d9ff]"></i>
                                                    <a href={`tel:${educationData[selectedTab].phone.replace(/\s+/g,'')}`} className="hover:underline">
                                                        {educationData[selectedTab].phone}
                                                    </a>
                                                </div>
                                            )}
                                            {(educationData[selectedTab].location || educationData[selectedTab].address) && (
                                                <div className="flex items-center gap-3 text-[#e0e6ed]">
                                                    <i className="fa-solid fa-location-dot text-[#00d9ff]"></i>
                                                    <span>
                                                        {educationData[selectedTab].address || educationData[selectedTab].location}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
