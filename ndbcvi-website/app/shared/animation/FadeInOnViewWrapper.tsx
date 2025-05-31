'use client';

import React, { useEffect, useRef, useState } from 'react'

export const FadeInOnViewWrapper = (
    { children, animation_duration = 750, translationY = "0px", translationX = "0px", yDir = "down", xDir = "left", delay = "0" }: 
    { children: React.ReactNode, animation_duration?: number, translationY?: string, translationX?: string, yDir?: string, xDir?: string, delay?: string }) => {

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
    
    const animationString = `opacity-0 ${yDir === "down" ? `-translate-y-[${translationY}]` : `translate-y-[${translationY}]`} ${xDir == "left" ? `-translate-x-[100px]` : `translate-x-[${translationX}]`}`;
    console.log(animationString);
    return (
        <div 
            ref={ref} 
            className={`transition-all duration-${animation_duration} ease-in-out delay-${delay} 
                ${visible ? 'opacity-100' : 
                    `opacity-0 ${yDir === "down" ? `-translate-y-[${translationY}]` : `translate-y-[${translationY}]`} ${xDir == "left" ? `-translate-x-[${translationX}]` : `translate-x-[${translationX}]`}`
                }
            `}
        >
            {children}
        </div>
    );
}
