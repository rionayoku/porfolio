import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.17, 0.55, 0.55, 1] }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
