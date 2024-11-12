/* eslint-disable import/no-anonymous-default-export */
'use client';

import { useEffect, useRef, useState } from "react";
import { ModalContext, useModalContext } from "../../context/modalContext";
import { createPortal } from "react-dom";
import Image from "next/image";
import closeBtn from "@/app/assets/svgs/close-modal.svg";


export const ModalTemplate = ({modalActivator, modalContent}: {modalActivator: JSX.Element | JSX.Element[], modalContent: JSX.Element}) => {
    return (
        <ModalProvider modalContent={modalContent}>
            <Base>
                <ModalActivator>
                    {modalActivator}
                </ModalActivator>
            </Base>
        </ModalProvider>
    )
}

const ModalProvider = ({modalContent, children}: {modalContent: JSX.Element | JSX.Element, children: JSX.Element | JSX.Element[]}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalScrollPosition, setModalScrollPosition] = useState(0);

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false);
    useEffect(() => {
        setDomReady(true);
        
    }, []);

    const scrollLargeScreen = useRef<HTMLDivElement>(null);
    const scrollSmallScreen = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        // Set modal scroll position for setting colors of scroll links
        if(window.innerWidth <= 768) {
            setModalScrollPosition(scrollSmallScreen.current?.scrollTop as number);
        }
        else {
            setModalScrollPosition(scrollLargeScreen.current?.scrollTop as number);
        }
    }

    // Helper function for scrolling to sections of the modal without changing the URL
    const scrollIntoTheView = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id) as HTMLElement;
        if (!element) {
            return;
        }
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
        });
    };

    // Prevent scrolling on the main page when the modal is open
    useEffect(() => {
        if (open) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = '';
        }

        // Cleanup on component unmount
        return () => {
        document.body.style.overflow = '';
        };
    }, [open]);


    return (
        <ModalContext.Provider value={{isOpen: open, handleOpen, handleClose, modalContent, scrollIntoTheView, handleScroll, modalScrollPosition, domReady, scrollSmallScreen, scrollLargeScreen }}>
            {children}
        </ModalContext.Provider>
    );
}


const Base = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    // State for managing if the modal is visible or not
    const { isOpen, handleClose, handleScroll, modalContent, domReady, scrollSmallScreen, scrollLargeScreen } = useModalContext();

    // Element where the modal will be teleported to
    const modalTeleport = (typeof document !== 'undefined' && document.getElementById('portal')) as HTMLElement;

    return (
        <>
            {/* Activator */}
            {children}
            {
                domReady && isOpen && 
                createPortal(
                    <div id='backdrop' ref={scrollLargeScreen} onScroll={handleScroll} onClick={handleClose} className={`flex flex-col items-center z-20 transition-colors overflow-y-scroll m-0 ${isOpen ? "fixed inset-0 bg-black/70" : ""}`}>
                        <div id="infoPopup" ref={scrollSmallScreen} onScroll={handleScroll} onClick={(e) => e.stopPropagation()} className={`h-full w-11/12 overflow-y-scroll mt-[80px] mb-[60px] mx-[12px] pt-[24px] pb-[36px] md:overflow-visible md:h-fit md:mt-[172px] md:mb-[63px] md:pt-[72px] md:pb-[10px] rounded-3xl bg-white transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : 'scale-125 opacity-0'}`}>
                            <button onClick={handleClose} className='sticky top-0 left-[20px] md:top-[72px] md:left-[90%] w-8 h-8 rounded-full bg-slate-100 z-30'>
                                <Image src={closeBtn} alt="close modal button"/>
                            </button>
                            {modalContent}
                        </div>
                        <div id="small-screen-scrollLinks" />
                    </div>, 
                    modalTeleport)
            }
        </>
    );
};


const ModalActivator = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const {handleOpen} = useModalContext();

    return(
        <div onClick={handleOpen} className="h-full">
            {children}
        </div>
    );
};
