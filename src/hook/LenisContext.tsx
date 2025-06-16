import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

type LenisContextType = {
    lenis: Lenis | null;
    ready: boolean;
};

const LenisContext = createContext<LenisContextType>({ lenis: null, ready: false });

export const useLenis = () => useContext(LenisContext);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;
        setReady(true);

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <LenisContext.Provider value={{ lenis: lenisRef.current, ready }}>{children}</LenisContext.Provider>;
};
