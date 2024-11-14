'use client';

import { SanityDocument } from 'next-sanity';
import { createContext, useContext } from 'react';

type NavBarContextType = {
    eventsPopup: SanityDocument,
    faqPopup: SanityDocument,
    banner: SanityDocument
}
export const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const useNavBarContext = () => {
    const navBar = useContext(NavBarContext);
    if(navBar === undefined) {
        throw new Error("useNavBarContext must be used with a NavBarContext");
    }

    return navBar;
}