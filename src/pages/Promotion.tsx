import React from "react";
import ReactPlayer from "react-player";

import btnIcon from "../image/btn_icon.svg";

export default function Promotion() {
    return (
        <div className="promotion">
            <div className="inner">
                <div className="section videoBox">
                    <ReactPlayer
                        // url={process.env.PUBLIC_URL + '/platform_movie.mp4'}
                        url="https://www.youtube.com/watch?v=nsuc8Iwj1GM"
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        controls={false}
                        loop={true}
                    />
                </div>
                <ul className="promotionText bodyFont02">
                    <li className="mainFont03">“AI가 다 챙겨주는 일상”</li>
                    <li>스케줄 짜고 할인 비교하느라 번거로우셨죠?</li>
                    <li>이제는 AI가 스케줄부터 할인까지, 단 3분 만에 자동으로 설계해 드립니다.</li>
                    <li>실시간 경로 분석을 통해 최적의 일정과 혜택을 빠르게 제안합니다.</li>
                    <li>지금 가장 스마트한 예약 방식, 다인패스에서 시작해 보세요</li>
                </ul>
            </div>
        </div>
    );
}
