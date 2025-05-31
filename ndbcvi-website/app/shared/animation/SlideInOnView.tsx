'use client';

import React, { useEffect, useRef, useState } from 'react'

export const SlideInOnView = (
    {children, animation_duration = 750, translationY = "0px", translationX = "0px", delay = "0"}: 
    {children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, delay?: string}) => {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
            }
        }, {threshold: 0.1});

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
                animation: visible 
                    ? `translateUp 0.5s linear ${delay}s forwards`
                    : '',
                animationDelay: `${delay}s`,
                transition:`all ${animation_duration}ms ease-in-out ${delay}ms`,
                opacity: visible ? 1 : 0
            }}
            className={`w-full h-full`}
        >
            {children}
        </div>
    )
}
