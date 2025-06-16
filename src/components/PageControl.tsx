import React, { useEffect, useState } from "react";
import { notice } from "../data/Data";
import { noticeInfo } from "../pages/NoticeList";
import { Link } from "react-router-dom";

interface propsType {
    id: number;
}

export default function PageControl({ id }: propsType) {
    const [preBoard, setPreBoard] = useState<noticeInfo[] | null>(null);
    const [nextBoard, setnextBoard] = useState<noticeInfo[] | null>(null);

    function preText(id: number) {
        const preNumber = id - 1;
        if (preNumber === 0) {
            return;
        } else {
            const board = notice?.find((con) => con.id === preNumber);
            if (board) {
                setPreBoard([board]);
            } else {
                return;
            }
        }
    }
    function nextText(id: number) {
        const nextNumber = id + 1;
        if (nextNumber === id) {
            return;
        } else {
            const board = notice.find((con) => con.id === nextNumber);
            if (board) {
                setnextBoard([board]);
            } else {
                return;
            }
        }
    }

    const preState = preBoard?.[0].id === undefined || id === 1;
    const nextState = nextBoard?.[0].id === id || nextBoard?.[0].id === undefined;

    useEffect(() => {
        preText(id);
        nextText(id);
    }, [id]);

    return (
        <div className="pageControl">
            <div>
                {preState ? (
                    <Link to="/" onClick={(event) => event.preventDefault()} className="pointer-events-none">
                        <p>이전글</p>
                        <div>
                            <span>이전 글이 존재하지 않습니다.</span>
                        </div>
                    </Link>
                ) : (
                    <Link to={`/notice/${preBoard?.[0].id}`}>
                        <p>이전글</p>
                        <div>
                            <span> [공지]</span>
                            {preBoard?.[0].title}
                        </div>
                    </Link>
                )}
            </div>
            <div>
                {nextState ? (
                    <Link to="/" onClick={(event) => event.preventDefault()} className="pointer-events-none">
                        <p>다음글</p>
                        <div>
                            <span>다음 글이 존재하지 않습니다.</span>
                        </div>
                    </Link>
                ) : (
                    <Link to={`/notice/${nextBoard?.[0].id}`}>
                        <p>다음글</p>
                        <div>
                            <span>[공지]</span>
                            {nextBoard?.[0].title}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
//md:mt-[63px] mt-[36px] flex md:flex-row flex-col justify-between md:gap-[20px] gap-[10px] md:text-[16px] text-[14px] font-[500]
