import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Individual option component
const FabOption: React.FC<{ href: string; iconClass: string; tooltip: string; brandClass: string; target?: string; }> = ({ href, iconClass, tooltip, brandClass, target }) => (
    <a href={href} className={`fab-option group ${brandClass}`} target={target || '_self'} rel={target === '_blank' ? 'noopener noreferrer' : ''}>
        <i className={iconClass}></i>
        <span className="fab-tooltip">{tooltip}</span>
    </a>
);

// Framer Motion variants for animations
const menuVariants = {
    open: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 }
    }
};

const optionVariants = {
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            // FIX: Cast `type: "spring"` to a const to fix a TypeScript type error.
            type: "spring" as const,
            stiffness: 400,
            damping: 15
        }
    },
    closed: {
        y: 25,
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.2
        }
    }
};

const FloatingContact: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const fabRef = useRef<HTMLDivElement>(null);

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fabOptions = [
        { href: "https://wa.me/6285161302281", target: "_blank", iconClass: "fa-brands fa-whatsapp", tooltip: "WhatsApp", brandClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]" },
        { href: "mailto:riona.yoku@gmail.com", iconClass: "fa-solid fa-envelope", tooltip: "Email", brandClass: "hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]" },
        { href: "tel:+6285161302281", iconClass: "fa-solid fa-phone", tooltip: "Call", brandClass: "hover:bg-[#34B7F1] hover:text-white hover:border-[#34B7F1]" }
    ];

    return (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[1000]">
            <motion.div ref={fabRef} className="relative flex flex-col items-center">
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="absolute bottom-[90px] right-0 flex flex-col items-center gap-5"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            aria-hidden={!isOpen}
                        >
                           {fabOptions.map(option => (
                                <motion.div key={option.tooltip} variants={optionVariants}>
                                    <FabOption {...option} />
                                </motion.div>
                           ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-[#00d9ff] to-[#8b5cf6] text-[#050714] border-none cursor-pointer shadow-[0_4px_20px_rgba(0,217,255,0.4)] text-3xl transition-transform duration-300 flex items-center justify-center relative overflow-hidden hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,217,255,0.6)]"
                    aria-label={isOpen ? "Close contact options" : "Open contact options"}
                    aria-expanded={isOpen}
                >
                    <AnimatePresence initial={false} mode="wait">
                        <motion.i
                            key={isOpen ? 'times' : 'comments'}
                            className={`fa-solid ${isOpen ? 'fa-times' : 'fa-comments'}`}
                            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        />
                    </AnimatePresence>
                </button>
            </motion.div>
        </div>
    );
};

export default FloatingContact;