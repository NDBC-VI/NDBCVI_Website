'use client';

import React, { useEffect, useRef, useState } from 'react'

export const FadeInOnViewWrapper = (
    { children, animation_duration = 750, translationY = "0px", translationX = "0px", delay = "0" }: 
    { children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, yDir?: string, xDir?: string, delay?: string }) => {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
            }
        }, {threshold: 0.8});

        if(currentRef) {
            observer.observe(currentRef);
        }

        return (() => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        });
    }, []);
    
    return (
        <div 
            ref={ref} 
            style={{
                transform: visible 
                    ? 'translate(0px, 0px)'
                    : `translate(${translationX}, ${translationY})`,
                transition:`all ${animation_duration}ms ease-in-out ${delay}ms`,
                opacity: visible ? 1 : 0
            }}>
            {children}
        </div>
    );
}
