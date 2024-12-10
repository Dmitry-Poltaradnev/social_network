import React from "react";
import s from "./members.module.css";

type PaginatorProps = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
                                                        totalCount,
                                                        pageSize,
                                                        currentPage,
                                                        onPageChange,
                                                    }) => {

    const pagesCount = Math.ceil(totalCount / pageSize);

    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    return (
        <div>
            {pages.map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? s.activeButton : ""}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};
