import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import companyVisual from "../image/company_visual.svg";
import organization from "../image/organization.svg";

export default function Company() {
    const textRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        const originalText = textRef.current.textContent || "";

        gsap.fromTo(
            textRef.current,
            { text: "" },
            {
                duration: 2,
                text: originalText,
                ease: "none",
            }
        );
    }, []);

    // 반복할시 아래코드 이용, .textEffect 안에 text를 삭제 해야함
    //const content = "안녕하세요, 우성커머스입니다.";

    // useGSAP(() => {
    //     const el = textRef.current;
    //     if (!el) return;

    //     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    //     tl.set(el, { text: "" }).to(el, {
    //         duration: 2,
    //         text: content,
    //         ease: "none",
    //     });
    // }, []);

    return (
        <div className="company">
            <div className="companyVisual">
                <div className="inner">
                    <h2 className="mainFont02">우성커머스 소개</h2>
                    <ul className="subTitle02">
                        <li>고객의 일상을 더 효율적으로 만드는</li>
                        <li>AI 기반 통합 예약 솔루션 기업입니다.</li>
                    </ul>
                </div>
                <div className="companyVisualBg attachmentBg">
                    <div></div>
                </div>
            </div>
            <div className="companyWrap inner">
                <div className="companyTop">
                    <div>
                        <b className="textEffect" ref={textRef}>
                            안녕하세요, 우성커머스입니다.
                        </b>
                        우리는 예약이 필요할 때마다 수많은 앱을 넘나들고, 시간을 계산하고, 혜택을 비교하는 복잡한 과정을 너무나 익숙하게 받아들이는 세상 속에 살고 있습니다.
                        <br />
                        <br /> “예약을 더 간단하게, 더 똑똑하게 만들 수는 없을까?”
                        <br />
                        <br />
                        <b className="block fon-[600]">AI 기술을 통해 위치, 시간, 이동, 혜택까지 한 번에 설계해주는 통합 예약 플랫폼.</b>
                        다인패스는 단순한 예약 도구가 아니라 일상 속 수많은 선택을 더 똑똑하고 효율적으로 도와주는 기술 파트너가 되고자 합니다.
                        <br />
                        <br />
                        복잡한 예약을 하나로 통합하고, 혜택은 놓치지 않도록 자동으로 챙기며, 누구나 쉽고 간편하게 사용할 수 있도록 설계했습니다.
                        <br />
                        앞으로도 우리는 누구에게나 꼭 맞는 예약 경험을 만들기 위해 끊임없이 고민하고, 더 편리한 일상을 위해 연구해 나가겠습니다.
                        <br />
                        <br />
                        <b className="fon-[600]">우성커머스 드림</b>
                    </div>
                </div>
                <div className="campayBot inner">
                    <div className="subTitle">
                        <h3 className="mainColor bodyFont02">Organization</h3>
                        <h2 className="mainFont03">
                            <div>우성커머스는 효율적인 조직 운영으로 </div>
                            <div>지속가능한 성장을 추구합니다.</div>
                        </h2>
                    </div>
                    <div className="subBox">
                        <img src={organization} alt="organization" />
                    </div>
                </div>
            </div>
        </div>
    );
}
