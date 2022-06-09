import React, { useMemo, useRef } from "react";
import style from './users.module.css';

const Paginatior = (props) => {

    const { pageSize, currentPage, changePage, totalItems, visiblePages } = props;
    const pagination = useMemo(() => Array(Math.ceil(totalItems / pageSize))
        .fill('')
        .map((_, index) => index + 1), [totalItems, pageSize]);
    const a = currentPage - 1 - (Math.ceil(visiblePages / 2) - 1);
    const start = a < 0 ? 0 : a;
    const current = pagination.splice(start, visiblePages);
    
    return (
        <div className={style.pages}>
            {current.map(number => {
                return <span
                    key={number}
                    onClick={() => changePage(number)}
                    className={currentPage === number
                        ? style.currentPage
                        : undefined}>
                    {`[ ${number} ]`}
                </span>
            })}
        </div >
    )
};

export default Paginatior;