/* eslint-disable import/no-anonymous-default-export */
'use client';

import { useEffect, useState } from "react";
import { ModalContext, useModalContext } from "../context/modalContext";
import { createPortal } from "react-dom";



const ModalProvider = ({modalContent, children}: {modalContent: JSX.Element, children: JSX.Element | JSX.Element[]}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ModalContext.Provider value={{isOpen: open, handleOpen, handleClose, modalContent }}>
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
                domReady && 
                createPortal(
                    <div id='backdrop' onClick={handleClose} className={`flex flex-col items-center z-20 overscroll-contain transition-colors overflow-scroll ${isOpen ? "fixed inset-0 bg-black/70" : ""}`}>
                        <div id="infoPopup" onClick={(e) => e.stopPropagation()} className={`absolute my-5 left-1/12 w-11/12 pb-2 rounded-3xl bg-white transition-all ${isOpen ? "scale-100 opacity-100" : 'scale-125 opacity-0'}`}>
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
        <div className='group relative size-full cursor-pointer flex flex-col' onClick={handleOpen}>
            {children}
        </div>
    );
};


export default {
    ModalProvider,
    Base,
    Activator: ModalActivator,
};
