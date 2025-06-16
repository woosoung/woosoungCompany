import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../image/logo.svg";
import mbar from "../image/mbar.png";
import mbarClose from "../image/mbarClose.png";
import { useMenuStore } from "../stores/store";

export default function Header() {
    const [scrollY, setScrollY] = useState<boolean>(false);
    const [width, setWidth] = useState(window.innerWidth);
    const menuState = useMenuStore((state) => state.menuState);
    const toggleMenu = useMenuStore((state) => state.toggleMenu);
    const setMenu = useMenuStore((state) => state.setMenu);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollY(true);
        } else {
            setScrollY(false);
        }
    };

    useEffect(() => {
        const body = document.querySelector("body");

        const Resize = () => {
            const currentWidth = window.innerWidth;
            setWidth(currentWidth);

            if (currentWidth <= 991 && menuState) {
                body?.classList.add("stopScrolling");
            } else {
                body?.classList.remove("stopScrolling");
                setMenu(false);
            }
        };

        const handleResize = () => {
            Resize();
        };

        Resize(); // 최초 실행
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuState, setMenu]);

    return (
        <header className={`${scrollY ? "on" : ""} ${menuState ? "mobOn" : ""}`}>
            <div className="inner">
                <h1 className="flex items-center md:block">
                    <NavLink to="/" onClick={() => setMenu(false)}>
                        <img src={logo} alt={logo} width={182} />
                    </NavLink>
                </h1>
                <nav className={`gnb ${width <= 991 ? "mob" : ""} ${menuState ? "on" : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/service" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "on" : undefined)}>
                                <span>서비스 소개</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/company" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "on" : undefined)}>
                                <span>기업소개</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/notice" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "on" : undefined)}>
                                <span>공지사항</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/promotion" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "on" : undefined)}>
                                <span>홍보자료</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/inquiry" onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "on" : undefined)}>
                                <span>문의하기</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="mBtn" onClick={toggleMenu}>
                    {menuState ? <img src={mbarClose} alt="" /> : <img src={mbar} alt="" />}
                </div>
            </div>
        </header>
    );
}

// 작업중이라 test로 링크 넣어둠
