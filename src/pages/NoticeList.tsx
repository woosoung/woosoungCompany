import React, { useState } from "react";
import { notice } from "../data/Data";
import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

export interface noticeInfo {
    id: number;
    title: string;
    content: string;
    date: string;
}
export default function NoticeList() {
    const [page, setPage] = useState(1);
    const limit = 5;
    const offset = (page - 1) * limit;

    return (
        <div className="notice inner">
            <div className="subBody">
                <div className="subTitle">
                    <h3 className="mainFont02">공지사항</h3>
                    <div className="noticeWrap">
                        <ul>
                            {notice.slice(offset, offset + limit).map((el: noticeInfo, idx: number) => (
                                <li key={el.id} className="">
                                    <Link to={`/notice/${el.id}`} className="btnEffect">
                                        <p>
                                            <span>[공지]</span>
                                            {el.title}
                                        </p>
                                        <span className="date bodyFont02">{el.date}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Pagination total={notice.length} limit={limit} page={page} setPage={setPage} />
                    </div>
                </div>
            </div>
        </div>
    );
}
