import React, { useState, useEffect } from 'react';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import SectionWrapper from './components/SectionWrapper';

const Loader: React.FC = () => (
    <div id="loader" className="fixed top-0 left-0 w-full h-full bg-[#050714] flex justify-center items-center z-[9999] transition-opacity duration-500">
        <div className="w-[60px] h-[60px] border-[3px] border-[rgba(255,255,255,0.1)] border-t-[#00d9ff] rounded-full animate-spin"></div>
    </div>
);

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="relative z-0">
            <GlobalBackground />
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <SectionWrapper id="projects"><Projects /></SectionWrapper>
                    <SectionWrapper id="skills"><Skills /></SectionWrapper>
                    <SectionWrapper id="experience"><Experience /></SectionWrapper>
                    <SectionWrapper id="education"><Education /></SectionWrapper>
                    <SectionWrapper id="contact"><Contact /></SectionWrapper>
                </main>
                <FloatingContact />
            </div>
        </div>
    );
};

export default App;
