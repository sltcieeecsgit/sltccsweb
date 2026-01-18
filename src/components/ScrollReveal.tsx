import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    distance?: number;
    delay?: number;
    duration?: number;
}

export default function ScrollReveal({
    children,
    className = '',
    distance = 30,
    delay = 0,
    duration = 800,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Using a slightly more robust check for repeat animations
                setIsVisible(entry.isIntersecting);
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={domRef} className={className}>
            <div
                className="transition-all reveal-cubic"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'none' : `translateY(${distance}px)`,
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${delay}ms`,
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden',
                }}
            >
                {children}
            </div>
        </div>
    );
}
