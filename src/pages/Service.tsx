import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import serviceVisual from "../image/service_visual.svg";
import service0301 from "../image/service0301.svg";
import service0302 from "../image/service0302.svg";
import service0303 from "../image/service0303.svg";
import SolutionSlide from "../components/SolutionSlide";

export default function Service() {
    const containerRef = useRef(null);
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 991px)", () => {
                // service01 이미지 애니메이션

                gsap.utils.toArray<HTMLElement>(".service01 .conImg").forEach((img) => {
                    gsap.from(img, {
                        opacity: 0,
                        clipPath: "inset(50%)",
                        duration: 1,
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 70%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // service01 텍스트 애니메이션
                gsap.utils.toArray<HTMLElement>(".service01 .conText").forEach((text) => {
                    gsap.from(text, {
                        opacity: 0,
                        x: -100,
                        duration: 1.2,
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 70%",
                            toggleActions: "play none none none",
                        },
                    });
                });
                gsap.from(".service03 .subBox ul li", {
                    opacity: 0,
                    y: 100,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".service03 .subBox ul li",
                        start: "top 70%",
                        toggleActions: "play none none none",
                    },
                });
                // cleanup (media query 변경 또는 컴포넌트 언마운트 시)
                return () => {
                    ScrollTrigger.getAll().forEach((st) => st.kill());
                    gsap.killTweensOf("*");
                };
            });

            return () => {
                mm.revert();
                ScrollTrigger.getAll().forEach((st) => st.kill());
                gsap.killTweensOf("*");
                ScrollTrigger.clearScrollMemory?.();
            };
        },
        { scope: containerRef }
    );
    return (
        <div className="service" ref={containerRef}>
            <div className="serviceVisual">
                <div className="inner">
                    <h2 className="mainFont02">다인패스 서비스 소개</h2>
                    <ul className="subTitle02">
                        <li>AI 기술로 일상 속 예약을 더 똑똑하게</li>
                        <li>만들어 드리는 통합 예약 플랫폼 입니다.</li>
                    </ul>
                </div>
                <div className="serviceVisualBg attachmentBg">
                    <div></div>
                </div>
            </div>
            <div className="serviceWrap">
                <div className="service01">
                    <div className="subTitle inner">
                        <h3 className="mainColor bodyFont02">Feature</h3>
                        <h2 className="mainFont03">
                            <div>복잡한 예약이 심플해 지는 방법</div>
                            <div>다인패스를 소개합니다.</div>
                        </h2>
                    </div>
                    <div className="subBox">
                        <ul>
                            <li>
                                <div className="inner">
                                    <div className="conImg">
                                        <img src={service0301} alt="service0301" />
                                    </div>
                                    <div className="conText">
                                        <ul className="textBox">
                                            <li className="mainColor">SERVICE 01.</li>
                                            <li>
                                                지금 <span className="mainColor">내 위치</span>에 가장 잘 맞는 선택
                                            </li>
                                            <li>
                                                <div>내 주변에서 가장 잘 맞는 곳을 추천해요</div>
                                                <div>거리,시간,선호도를 모두 계산했어요</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="conImg">
                                        <img src={service0302} alt="" />
                                    </div>
                                    <div className="conText">
                                        <ul className="textBox">
                                            <li className="mainColor font-[500] md:text-[16px] text-[14px]">SERVICE 02.</li>
                                            <li>
                                                AI가 짜주는 <span className="mainColor">가장 빠른</span> 이동 경로
                                            </li>
                                            <li>
                                                <div>길 찾느라 헤매지 마세요!</div>
                                                <div>AI가 빠르고 편한 길로 안내해줘요</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="conImg">
                                        <img src={service0303} alt="" />
                                    </div>
                                    <div className="conText">
                                        <ul className="textBox">
                                            <li className="mainColor font-[500] md:text-[16px] text-[14px]">SERVICE 03.</li>
                                            <li>
                                                쓸 돈은 줄이고, 받을 <span className="mainColor">혜택</span>은 꽉
                                            </li>
                                            <li>
                                                <div>할인 다 챙겼나 확인할 필요 없어요</div>
                                                <div>가장 저렴한 조합으로 알아서 예약해줘요</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="service02">
                    <div className="subTitle inner">
                        <h3 className="mainColor bodyFont02">For Everyone</h3>
                        <h2 className="mainFont03">
                            <div>다인패스는 누구에게나 필요한</div>
                            <div>예약 솔루션 입니다.</div>
                        </h2>
                    </div>
                    <div className="subBox inner">
                        <div>
                            <SolutionSlide />
                        </div>
                    </div>
                </div>
                <div className="service03">
                    <div className="subTitle inner">
                        <h3 className="mainColor bodyFont02">Benefits</h3>
                        <h2 className="mainFont03">
                            <div>AI가 예약 이후까지 케어합니다.</div>
                        </h2>
                    </div>
                    <div className="subBox inner">
                        <ul>
                            <li className="grid01">
                                <div>재방문 유도 쿠폰 제공</div>
                                <div>
                                    <span>14일 이상 서비스 미이용 고객에게</span>
                                    <span>맞춤 할인 쿠폰을 자동 전송해요.</span>
                                </div>
                            </li>
                            <li className="grid02">
                                <div>충성 고객 리워드 제공</div>
                                <div>
                                    <span>14일 이상 서비스 미이용 고객에게</span>
                                    <span>맞춤 할인 쿠폰을 자동 전송해요.</span>
                                </div>
                            </li>
                            <li className="grid03">
                                <div>업무 맞춤 운영 팁 전달</div>
                                <div>
                                    <span>수요가 몰릴 것으로 예측되면, AI가 미리 재고 준비와 인력 배치 같은 운영 팁을 자동으로 전달해드려요.</span>
                                    <span>바쁜 날을 앞두고 놓치기 쉬운 포인트들을 미리 리마인드 해주니까 안심할 수 있어요.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
