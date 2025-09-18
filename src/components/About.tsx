import React from 'react';

const About: React.FC = () => {
    const handleProjectClick = (projectId: string) => {
        const element = document.getElementById(projectId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="about" className="py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-[30px]">
                <div className="text-center mb-12">
                    <h2 className="section-title">About Me</h2>
                    <p className="text-[#64748b] text-lg md:text-xl font-light tracking-[1px]">Who am I?</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                        <div className="text-[#e0e6ed] text-lg md:text-xl leading-relaxed space-y-6">
                            <p>
                                Hi, I'm Mario Harold Yoku—a passionate IT Network & Systems Engineer from Jayapura, Papua.
                                My career has taken me on an exciting journey across Indonesian data centers, islands, and even big events!
                            </p>

                            <p>
                                From building robust{' '}
                                <button
                                    onClick={() => handleProjectClick('project-0')}
                                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors"
                                >
                                    network monitoring solutions with Zabbix and Cacti
                                </button>
                                {' '}for Telkomsel networking core devices, HVAC data center, to rolling out wireless links between cities (Wamena and Jayapura), and engineered{' '}
                                <button
                                    onClick={() => handleProjectClick('project-1')}
                                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors"
                                >
                                    wireless networks for Jayapura-Sarmi-Mamberamo
                                </button>
                                , set up secure{' '}
                                <button
                                    onClick={() => handleProjectClick('project-2')}
                                    className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 hover:decoration-cyan-300 transition-colors"
                                >
                                    CCTV surveillance for PON PAPUA 2020
                                </button>
                                , maintained banking CRM/CDM for IBM, and even brought government tax systems online for Kabupaten Jayapura.
                            </p>

                            <p>
                                Whether it's PTMP wireless deployments over tough terrains or keeping mission-critical systems up and running,
                                I thrive on solving complex challenges and bringing reliable connectivity where it matters most.
                            </p>

                            <p>
                                Certified by Google, ACIT, and ACTB, I'm always excited to learn, explore, and help organizations
                                (and communities) stay connected and secure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
