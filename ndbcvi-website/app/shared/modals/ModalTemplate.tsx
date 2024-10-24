/* eslint-disable import/no-anonymous-default-export */
'use client';

import { useEffect, useState } from "react";
import { ModalContext, useModalContext } from "@/app/context/modalContext";
import { createPortal } from "react-dom";


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
    
    // Helper function for scrolling to sections of the modal without changing the URL
    const scrollIntoTheView = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id) as HTMLElement;
        if (!element) {
            return;
        }
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };

    // Prevent scrolling on the main page when the modal is open
    useEffect(() => {
        if (open) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = '';
        }

        // Cleanup on component unmount
        return () => {
        document.body.style.overflow = '';
        };
    }, [open]);


    return (
        <ModalContext.Provider value={{isOpen: open, handleOpen, handleClose, modalContent, scrollIntoTheView }}>
            {children}
        </ModalContext.Provider>
    );
}


const Base = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    // State for managing if the modal is visible or not
    const { isOpen, handleClose, modalContent } = useModalContext();

    // Wait for the DOM to be ready before teleporting modal to the top of the DOM
    const [domReady, setDomReady] = useState(false);
    useEffect(() => {
        setDomReady(true);
        
    }, []);

    // Element where the modal will be teleported to
    const modalTeleport = (typeof document !== 'undefined' && document.getElementById('portal')) as HTMLElement;

    return (
        <>
            {/* Activator */}
            {children}
            {
                domReady && isOpen && 
                createPortal(
                    <div id='backdrop' onClick={handleClose} className={`flex flex-col items-center z-20 transition-colors overflow-y-scroll m-0 ${isOpen ? "fixed inset-0 bg-black/70" : ""}`}>
                        <div id="infoPopup" onClick={(e) => e.stopPropagation()} className={`my-5 w-11/12 pb-2 rounded-3xl bg-white transition-all ${isOpen ? "scale-100 opacity-100" : 'scale-125 opacity-0'}`}>
                            <button onClick={handleClose} className='absolute top-5 right-6 w-8 h-8 rounded-full bg-slate-100 z-30'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="size-6 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                            {modalContent}
                        </div>
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
