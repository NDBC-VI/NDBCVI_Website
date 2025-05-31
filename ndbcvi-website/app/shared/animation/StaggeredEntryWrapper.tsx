"use client";

import React, { useEffect, useRef, useState } from 'react'

export const StaggeredEntryWrapper = (
    { children, animation_duration = 750, translationY = "0px", translationX = "0px", yDir = "down", xDir = "left" }: 
    { children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, yDir?: string, xDir?: string }) => {
    
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
            }
        }, {threshold: 0.8});

        if(ref.current) {
            observer.observe(ref.current);
        }

        return (() => {
            if(ref.current) {
                observer.unobserve(ref.current);
            }
        });
    }, []);

    return (
        <div 
            ref={ref} 
            className={`flex transition-all duration-${animation_duration} ease-in-out 
                ${visible ? `opacity-100` 
                    : `opacity-0 ${yDir === "up" ? "-" : ""}translate-y-[${translationY}] ${xDir === "left" ? "-" : ""}translate-x-[${translationX}]`}`}>
            {children}
        </div>
    );
}
