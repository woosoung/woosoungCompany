import React, { useState } from "react";

//import partner from "../image/partner.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "../image/footer_logo.svg";
import arrow from "../image/dropdown_arrow.svg";
import ios from "../image/ios_icon.svg";
import aos from "../image/aos_color_icon.svg";
import blog from "../image/blog.svg";
import face from "../image/face.svg";
import ins from "../image/ins.svg";
import utub from "../image/utub.svg";

export default function Footer() {
    const [isFamily, setIsFamily] = useState<boolean>(false);

    const handleOpenPopup = () => {
        window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1188602808", "bizCommPop", "width=750, height=950");
    };

    return (
        <footer>
            <div className="footerInfo">
                <div className="inner">
                    <div className="flex flex-col justify-between footerBox md:flex-row">
                        <div className="footerL">
                            <div className="footerTop">
                                <div className="footerLogo">
                                    <Link to="/">
                                        <img src={logo} alt="logo" width={267} />
                                    </Link>
                                </div>
                                <ul>
                                    <li>
                                        <a href="" rel="noopener noreferrer" className="btnEffect btnEffectWhite">
                                            <img src={ios} alt="ios" />
                                            App Store
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" rel="noopener noreferrer" className="btnEffect btnEffectWhite">
                                            <img src={aos} alt="aos" />
                                            Google Play
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footerBot">
                                <ul>
                                    {/* <li className="companyName">
                                        <span>&copy;우성커머스 주식회사</span>
                                    </li>*/}
                                    <li>부산광역시 사하구 괴정로 67 (하단동) 기륭빌딩 201호</li>
                                    <li className="companyCeo">
                                        <div className="companyL">
                                            <span>대표</span>
                                            <span>안태욱</span>
                                        </div>
                                        <div className="companyR">
                                            <span>사업자 등록번호</span>
                                            <span>118-86-02808</span>
                                        </div>
                                    </li>
                                    <li>
                                        <span>e-mail</span>
                                        <span>woosoung3254@naver.com</span>
                                    </li>
                                    {/* <li>
                                        <span>통신판매업 신고번호</span>
                                        <span>2023-부산사하-0908 호</span>
                                    </li> */}
                                </ul>
                                <div className="footerLnb">
                                    <div>
                                        <a href="#none" onClick={handleOpenPopup} className="companyConfirm btnEffect btnEffectWhite">
                                            사업자정보확인
                                        </a>
                                    </div>
                                    <ul>
                                        <li>
                                            <NavLink to="/company" className={({ isActive }: { isActive: boolean }): string | undefined => (isActive ? "on underlineEffect" : "underlineEffect")}>
                                                회사소개
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/terms" className={({ isActive }: { isActive: boolean }): string | undefined => (isActive ? "on underlineEffect" : "underlineEffect")}>
                                                이용약관
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/privacy" className={({ isActive }: { isActive: boolean }): string | undefined => (isActive ? "on underlineEffect" : "underlineEffect")}>
                                                개인정보처리방침
                                            </NavLink>
                                        </li>
                                        {/* <li>
                                        <NavLink to="" className={({ isActive }: { isActive: boolean }): string | undefined => (isActive ? "on" : undefined)}>
                                            유의사항
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq" className={({ isActive }: { isActive: boolean }): string | undefined => (isActive ? "on" : undefined)}>
                                            자주 묻는 질문
                                        </NavLink>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footerR">
                            <h3>고객센터</h3>
                            <div className="info">
                                <ul>
                                    <li className="num">1577-8397</li>
                                    <li className="text-[#565656] text-[14px]">평일 09:30 ~ 18:00</li>
                                    <li className="text-[#565656] text-[14px]">점심시간 12:00 ~ 13:00</li>
                                </ul>
                            </div>
                            <div className={`${isFamily ? "on" : ""} familySite`}>
                                <button type="button" onClick={() => setIsFamily(!isFamily)}>
                                    패밀리 사이트 <img src={arrow} alt="arrow" className="arrow" />
                                </button>
                                <ul>
                                    <li>
                                        <a href="http://ws.dainpass.com/" onClick={() => setIsFamily(false)} rel="noopener noreferrer" target="_blank">
                                            다인패스 투자
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="https://www.google.co.kr/" rel="noopener noreferrer" target="_blank">
                                            알뜰 전기 요금제
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="snsBox w-[218px] mt-[24px]">
                                <ul className="w-full flex justify-center items-center gap-[16px]">
                                    <li>
                                        <a href="" rel="noopener noreferrer">
                                            <img src={blog} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" rel="noopener noreferrer">
                                            <img src={face} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" rel="noopener noreferrer">
                                            <img src={ins} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" rel="noopener noreferrer">
                                            <img src={utub} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="partner inner h-[92px] flex items-center">
                <a href="" rel="noopener noreferrer">
                    <img src={partner} alt="partner" className="h-[48px]" />
                </a>
            </div> */}
        </footer>
    );
}
