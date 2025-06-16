import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper 타입 임포트
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

//data
import { solutionText } from "../data/Data";

import arrow from "../image/slide_arrow.svg";

export default function SolutionSlide() {
    const [num, setNum] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const handleSlideChange = (swiper: SwiperType) => {
        setNum(swiper.realIndex);
    };
    // const pagination = {
    //     clickable: true,
    // };
    return (
        <>
            <Swiper
                pagination={{ type: "fraction" }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop
                slidesPerView={2}
                spaceBetween={26}
                className="solutionSlide"
                onBeforeInit={(swiper: SwiperType) => {
                    if (typeof swiper.params.navigation === "object") {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                onSlideChange={handleSlideChange}
            >
                {solutionText.map((item, idx) => (
                    <SwiperSlide key={item.id} className={num === idx % solutionText.length ? "on" : ""}>
                        <img src={item.img} alt={item.title} />
                        <div className="textBox">
                            <dl>
                                <dt className="bodyFont01">{item.title}</dt>
                                <dd className="bodyFont02">
                                    {item.content.split("\n").map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </dd>
                            </dl>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-navigation">
                <button className="swiperPrev" ref={prevRef}>
                    <img src={arrow} alt="prev" />
                </button>
                <button className="swiperNext" ref={nextRef}>
                    <img src={arrow} alt="next" />
                </button>
            </div>
        </>
    );
}
