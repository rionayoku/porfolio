import React, { useState, useEffect } from 'react';

const GlobalBackground: React.FC = () => {
    const [mouseGradientStyle, setMouseGradientStyle] = useState({ left: '0px', top: '0px', opacity: 0 });
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const animateWords = () => {
            const wordElements = document.querySelectorAll('.word-animate');
            wordElements.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
                setTimeout(() => {
                    (word as HTMLElement).style.animation = 'word-appear 0.8s ease-out forwards';
                }, delay);
            });
        };
        const timeoutId = setTimeout(animateWords, 500);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setMouseGradientStyle({ left: `${e.clientX}px`, top: `${e.clientY}px`, opacity: 1 });
        const handleMouseLeave = () => setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
            setRipples(prev => [...prev, newRipple]);
            setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="bg-gradient-to-br from-slate-900 via-black to-slate-800 text-slate-100 overflow-hidden fixed top-0 left-0 w-full h-full z-[-1]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs><pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(100, 116, 139, 0.1)" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
                <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
                <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
                <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
                <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
                <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} /><circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
                <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} /><circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
                <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
            </svg>
            
            <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
            <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
            <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
            <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>
            
            <div 
                id="mouse-gradient-react"
                className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
                style={{
                    left: mouseGradientStyle.left,
                    top: mouseGradientStyle.top,
                    opacity: mouseGradientStyle.opacity,
                }}
            ></div>

            {ripples.map(ripple => (
                <div
                    key={ripple.id}
                    className="ripple-effect"
                    style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
                ></div>
            ))}
        </div>
    );
};

export default GlobalBackground;