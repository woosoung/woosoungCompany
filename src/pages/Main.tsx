import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//컴포넌트
import DetailMap from "../components/KakaoMap";
import { mainAnimations } from "../data/Data";

//이미지
import btnIcon from "../image/btn_icon.svg";
import mainVisual from "../image/main_visual.svg";
import mainVisualM from "../image/main_mvisual.svg";
import aiImg01 from "../image/ai_img01.svg";
import aiImg02 from "../image/ai_img02.svg";
import aiImg03 from "../image/ai_img03.svg";
import smartVisual from "../image/smart_visual.svg";
import smartVisualM from "../image/smart_mvisual.svg";
import btnIconWhite from "../image/btn_icon_white.svg";

export default function Main() {
    const mainContainer = useRef(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();
            mm.add("(min-width: 991px)", () => {
                // 3번째 섹션 이미지
                gsap.utils.toArray<HTMLElement>(".section03 .content > div .conImg").forEach((img) => {
                    gsap.from(img, {
                        opacity: 0,
                        clipPath: "inset(50%)",
                        duration: 1,
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // 3번째 섹션 text
                gsap.utils.toArray<HTMLElement>(".section03 .content > div .conText").forEach((text) => {
                    gsap.from(text, {
                        opacity: 0,
                        x: -100,
                        duration: 1.2,
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    });
                });

                // 나머지 섹션들 데이터 반복 처리
                mainAnimations.forEach(({ selector, animation }) => {
                    gsap.from(selector, {
                        ...animation,
                        scrollTrigger: {
                            trigger: selector,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    });
                });
                // cleanup 함수: 언마운트되거나 미디어 쿼리 바뀔 때 실행
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
        { scope: mainContainer }
    );

    return (
        <div className="main" ref={mainContainer}>
            <section className="section01 inner">
                <div className="flex items-end justify-between conTop">
                    <ul className="mainFont01">
                        <li>예약의 모든 과정을</li>
                        <li>더 쉽고, 더 효율적으로</li>
                    </ul>
                    <Link to="/service" className="mainColor btnEffect btnEffectRounded">
                        자세히 보기 <img src={btnIcon} alt="btnIcon" />
                    </Link>
                </div>
                <div className="conBot">
                    <img src={mainVisual} alt="mainVisual" className="onlyPc" />
                    <img src={mainVisualM} alt="mainVisualM" className="onlyMobile" />
                </div>
            </section>
            <section className="section02">
                <div className="flex justify-between inner">
                    <div className="conLeft">
                        <h3 className="mainColor bodyFont02">Who we are</h3>
                        <ul className="mainFont03">
                            <li>우성커머스는 AI 기반의</li>
                            <li>
                                <span className="mainColor">통합 예약 플랫폼</span>을
                            </li>
                            <li>개발하는 기업입니다.</li>
                        </ul>
                    </div>
                    <div className="conRight bodyFont01">
                        <ul>
                            <li>우리는 매번 예약을 위해 여러 앱을 오가고, 시간과 혜택을 계산하는 번거로운 과정을 너무도 당연하게 받아들이며 살아왔습니다.</li>
                            <li>우성커머스는 그런 과정을 더 간단하고 똑똑하게 만들 수 없을까 하는 물음에서 시작되었습니다.</li>
                            <li className="pbStyle">“조금 더 간편하게, 더 나답게 예약할 수는 없을까?”</li>
                            <li>다인패스는 AI 기술을 기반으로 위치, 시간, 이동, 혜택까지 한번에 설계해주는 통합 예약 플랫폼입니다.</li>
                            <li>예약부터 결제, 운영까지 한 번의 경험이 더 나은 일상으로 이어지도록, 우리는 끊임없이 고민하고 발전해 가고 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section03 inner">
                <div className="title">
                    <h3 className="mainColor bodyFont02">Our Value</h3>
                    <h2 className="mainFont03">
                        <span>예약 시스템,</span>
                        <span> 그 이상의 경험을 만듭니다.</span>
                    </h2>
                </div>
                <div className="content">
                    <div>
                        <div className="conImg">
                            <img src={aiImg01} alt="" />
                        </div>
                        <div className="conText">
                            <dl>
                                <dt className="subTitle01">
                                    <div>신뢰를 만드는 </div>
                                    <div>단순함</div>
                                </dt>
                                <dd className="bodyFont02">
                                    <div>단순하고 직관적인 경험은 고객에게 </div>
                                    <div>가장 큰 신뢰를 남깁니다.</div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div className="conImg">
                            <img src={aiImg02} alt="" />
                        </div>
                        <div className="conText">
                            <dl>
                                <dt className="subTitle01">
                                    <div>사용자 중심의 </div>
                                    <div>스마트한 연결</div>
                                </dt>
                                <dd className="bodyFont02">
                                    <div>AI 기술을 기반으로 사용자의 니즈를 </div>
                                    <div>예측하고 최적화된 솔루션을 제안합니다.</div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div className="conImg">
                            <img src={aiImg03} alt="" />
                        </div>
                        <div className="conText">
                            <dl>
                                <dt className="subTitle01">
                                    <div>지속 가능한 </div>
                                    <div>성장의 파트너십</div>
                                </dt>
                                <dd className="bodyFont02">
                                    <div>고객, 파트너, 지역 사업자 모두와 함께 </div>
                                    <div>성장하는 방향을 설계합니다.</div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section04">
                <div className="sectionBg">
                    <img src={smartVisual} alt="smartVisual" className="onlyPc" />
                    <img src={smartVisualM} alt="smartVisualM" className="onlyMobile" />
                </div>
                <div className="inner smartText">
                    <h3 className="mainColor bodyFont02">Contact</h3>
                    <ul>
                        <li className="mainFont03">
                            <div>하루를 바꾸는 출발점</div>
                            <div>스마트한 예약의 시작</div>
                        </li>
                        <li className="bodyFont02">
                            <div>예약은 누군가의 하루를 바꾸는 출발점이 될 수 있습니다.</div>
                            <div>그 시작이 더 편안해 지도록 다인패스가 함께 합니다.</div>
                        </li>
                        <li>
                            <Link to="/inquiry" className="btnEffect btnEffectWhite">
                                다인패스 문의하기
                                <img src={btnIconWhite} alt="btnIconWhite" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section05 inner">
                <h2 className="mainFont03">오시는길</h2>
                <div className="address">
                    <ul>
                        <li>
                            <span>주소</span>
                            <span>49410 부산광역시 사하구 괴정로 67 (하단동) 기륭빌딩 201호</span>
                        </li>
                        <li>
                            <div>
                                <span>e-mail</span>
                                <span>
                                    <a href="mailto:woosoung3254@naver.com">woosoung3254@naver.com</a>
                                </span>
                            </div>
                            <div>
                                <span>대표전화</span>
                                <span>
                                    <a href="tel:1577-8397">1577-8397</a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <DetailMap />
            </section>
        </div>
    );
}
