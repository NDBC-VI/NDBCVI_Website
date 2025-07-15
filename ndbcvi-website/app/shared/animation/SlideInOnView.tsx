'use client';

import React, { useEffect, useRef, useState } from 'react'

export const SlideInOnView = (
    {children, animation_duration = 750, delay = "0"}: 
    {children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, delay?: string}) => {

    const ref = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        if(ref.current) {
            // Enable/disable animation based on user preferences
            if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                ref.current.setAttribute("data-animated", new Boolean(true).toString());
            }
        }
    }, []);

    const getStyle = () => {
        let style = {};
        if(ref.current?.getAttribute('data-animated') !== null) {
            style = {
                animation: visible 
                    ? `translateUp 0.5s linear ${delay}s forwards`
                    : '',
                animationDelay: `${delay}s`,
                transition:`all ${animation_duration}ms ease-in-out ${delay}ms`,
                opacity: visible ? 1 : 0
            };
        }
        else {
            style = {
                transform: 'translate(0, -250px)',
                opacity: 1
            };
        }
        return style;
    }

    return (
        <div
            ref={ref}
            style={ getStyle() }
            className={`w-full h-full`}
        >
            {children}
        </div>
    )
}
