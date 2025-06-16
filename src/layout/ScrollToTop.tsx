import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../hook/LenisContext";

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();
    const { lenis, ready } = useLenis();
    const prevPath = useRef<string | null>(null);

    useEffect(() => {
        if (!lenis || !ready) return;

        if (pathname !== prevPath.current) {
            prevPath.current = pathname;

            // 스크롤 지연 적용
            requestAnimationFrame(() => {
                lenis.scrollTo(0, { duration: 0.01 });
            });
        }
    }, [pathname, lenis, ready]);

    return <>{children}</>;
}
