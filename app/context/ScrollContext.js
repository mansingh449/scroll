// context/ScrollContext.js

'use client';

import { createContext, useContext, useRef, useState } from 'react';
 
const ScrollContext = createContext();
 
export function ScrollProvider({ children }) {

    const affiliateRef = useRef(null);

    const [shouldScrollToAffiliate, setShouldScrollToAffiliate] = useState(false);
 
    const triggerAffiliateScroll = () => {

        setShouldScrollToAffiliate(true);

    };
 
    const scrollToAffiliate = () => {

        if (affiliateRef.current) {

            const top = affiliateRef.current.getBoundingClientRect().top + window.scrollY - 80;

            window.scrollTo({ top, behavior: 'smooth' });

            setShouldScrollToAffiliate(false); // reset

        }

    };
 
    return (
<ScrollContext.Provider value={{ affiliateRef, shouldScrollToAffiliate, triggerAffiliateScroll, scrollToAffiliate }}>

            {children}
</ScrollContext.Provider>

    );

}
 
export function useScroll() {

    return useContext(ScrollContext);

}
 