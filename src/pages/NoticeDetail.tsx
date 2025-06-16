import React, { useEffect, useState } from "react";
import { notice } from "../data/Data";
import { useNavigate, useParams } from "react-router-dom";

import PageControl from "../components/PageControl";
import { Link } from "react-router-dom";

import listBtn from "../image/list_btn.svg";

type ParamsType = {
    id: string;
};

export default function NoticeDetail() {
    const params = useParams() as ParamsType;
    const [loading, setLoading] = useState<boolean>(true);
    const id = Number(params.id);
    const board = notice.find((con) => con.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
    }, [id]);

    return (
        <div className="subWrap inner notice detail">
            <div className="subBody">
                <div className="subTitle">
                    <h3 className="mainFont02">
                        <div
                            className="onlyMobile prevBtn"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            <img src={listBtn} alt="" />
                        </div>
                        공지사항
                    </h3>
                </div>
                <div className="noticeWrap">
                    {loading ? (
                        <div>loading...</div>
                    ) : (
                        <>
                            <div className="content">
                                <h4>{board?.title}</h4>
                                <div className="date bodyFont02">{board?.date}</div>
                                <div className="noticeContent">{board?.content}</div>
                            </div>
                            <PageControl id={id} />
                            <div className="listGo">
                                <Link to="/notice" className="btnEffect btnEffectColor">
                                    목록보기
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
