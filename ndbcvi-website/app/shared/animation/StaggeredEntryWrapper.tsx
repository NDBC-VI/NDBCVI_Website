"use client";

import React, { useEffect, useRef, useState } from 'react'

export const StaggeredEntryWrapper = (
    { children, animation_duration = 750, translationY = "0px", translationX = "0px", yDir = "down", xDir = "left" }: 
    { children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, yDir?: string, xDir?: string }) => {
    
    const ref = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        if(ref.current) {
            // Enable/disable animation based on user preferences
            if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                ref.current.setAttribute("data-animated", new Boolean(true).toString());
            }
        }
    }, []);

    return (
        <div 
            ref={ref} 
            className={ref.current?.getAttribute('data-animated') !== null ? `flex transition-all duration-${animation_duration} ease-in-out 
                ${visible ? `opacity-100` 
                    : `opacity-0 ${yDir === "up" ? "-" : ""}translate-y-[${translationY}] ${xDir === "left" ? "-" : ""}translate-x-[${translationX}]`}`
                : ''}>
            {children}
        </div>
    );
}
