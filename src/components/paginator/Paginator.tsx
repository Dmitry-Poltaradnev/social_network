import React, {useState} from "react";
import s from "./paginator.module.css";
import {Button} from "../common/Button";

type PaginatorProps = {
    totalItemCount: number;
    portionSize: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
                                                        totalItemCount,
                                                        portionSize,
                                                        currentPage,
                                                        onPageChange
                                                    }) => {

    const pagesCount = Math.ceil(totalItemCount / portionSize);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    return (
        <div className={s.paginatorWrapper}>
            {portionNumber > 1 &&
                <Button btnName={'Prev page'} btnEffect={() => {
                    setPortionNumber(portionNumber - 1)
                }}/>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((page) => (
                <button className={`${s.paginatorBtn} ${currentPage === page ? s.activeButton : s.unActiveButton}`}
                        key={page}
                        onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            {portionCount > portionNumber &&
                <Button btnName={'Next page'} btnEffect={() => setPortionNumber(portionNumber + 1)}/>}
        </div>
    );
};
