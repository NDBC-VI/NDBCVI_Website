'use client';

import { createContext, useContext } from "react";
import { ModalContextType } from "../types";


export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
    const modal = useContext(ModalContext);
    if(modal === undefined) {
        throw new Error("useModalContext must be used with a ModalContext");
    }
    
    return modal;
}