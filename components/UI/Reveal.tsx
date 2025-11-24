import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children?: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    fullHeight?: boolean;
}

export const Reveal = ({ children, width = "fit-content", delay = 0, fullHeight = true }: RevealProps) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.15 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ width }} className={`relative ${fullHeight ? 'h-full' : ''}`}>
            <div
                className={`transform transition-all duration-1000 ease-out ${fullHeight ? 'h-full' : ''} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
            >
                {children}
            </div>
        </div>
    );
};