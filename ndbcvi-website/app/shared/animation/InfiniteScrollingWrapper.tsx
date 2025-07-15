"use client";

import React, { useEffect, useRef, useState } from 'react'

export const InfiniteScrollingWrapper = ({ children, animationDuration="0s", direction="forwards" }: { children: React.ReactNode, animationDuration: string, direction?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const onMouseEnter = () => {
        ref.current?.style.setProperty("--scroll-speed", "200s");
    }
    const onMouseLeave = () => {
        ref.current?.style.setProperty("--scroll-speed", animationDuration);

    }

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty("--scroll-speed", animationDuration);
            ref.current.style.setProperty("--scroll-distance", "-256%");
        }
    }, [animationDuration]);

    useEffect(() => {
        if(ref.current) {
            // Enable/disable animation based on user preferences
            if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                ref.current.setAttribute("data-animated", new Boolean(true).toString());
            }
        }
    }, []);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        }, {threshold: 0.3});

        if(currentRef) {
            observer.observe(currentRef);
        }

        return (() => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        });
    }, []);

    const animationStyle = {
        "animation": `autoScrollX var(--scroll-speed, 40s) linear 1s infinite ${direction}`,
        "transition": "animation-duration 0.5s ease",
        "will-change": "transform"
    }

    return (
        <div className='animation-wrapper' id="infinite_scroll_wrapper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div id="animation-wrapper-inner-container" ref={ref}  className={`max-w-[100vw] flex flex-row`} >
                {children}
            </div>
        </div>
    )
}
