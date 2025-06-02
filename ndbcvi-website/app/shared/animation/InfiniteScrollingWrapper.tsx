"use client";

import React, { ReactElement, useEffect, useRef, useState } from 'react'

export const InfiniteScrollingWrapper = ({ children, duration="0s", direction="forwards" }: { children: React.ReactNode, duration: string, direction?: string }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);

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
        <div className='animation-wrapper max-w-[100vw]' id="infinite_scroll_wrapper" ref={ref}>
            {
                React.Children.map(children, (child: React.ReactNode) => {
                    return React.cloneElement(child as ReactElement, { duration: visible ? duration : "0s", direction: direction});
                })
            }
        </div>
    )
}
