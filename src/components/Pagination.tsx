import React from "react";
import listBtn from "../image/list_btn.svg";
import listBtnOn from "../image/list_btn_on.svg";

type Props = {
    total: number;
    limit: number;
    page: number;
    setPage: (page: number) => void;
};

export default function Pagination({ total, limit, page, setPage }: Props) {
    const numPages = Math.ceil(total / limit);
    const pageLimit = 5;
    const groupIndex = Math.floor((page - 1) / pageLimit);
    const start = groupIndex * pageLimit + 1;
    const end = Math.min(start + pageLimit - 1, numPages);
    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div className="pagination">
            <button type="button" className="prevBtn" onClick={() => page > 1 && setPage(page - 1)} disabled={page === 1}>
                {page === 1 ? <img src={listBtn} alt="prevBtn" /> : <img src={listBtnOn} alt="listBtnOn" />}
            </button>
            <ul>
                {pages.map((_, pageNum) => (
                    <li key={pageNum}>
                        <button type="button" onClick={() => setPage(pageNum + 1)} className={page === pageNum + 1 ? "on" : ""}>
                            {pageNum + 1}
                        </button>
                    </li>
                ))}
            </ul>
            <button type="button" className="nextBtn" onClick={() => setPage(page + 1)} disabled={page === numPages}>
                {page === numPages ? <img src={listBtn} alt="nextBtn" /> : <img src={listBtnOn} alt="listBtnOn" />}
            </button>
        </div>
    );
}
