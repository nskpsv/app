import React from "react";
import style from './Filters.module.css';

const Filters = (props) => {
    return (
        <div className={style.filters}>
            <div className={style.switcher}>

                <div
                    className={props.filter === 'men' ?
                        `${style.item} ${style.active}` : style.item}
                    onClick={(e) => props.onClick(e.target.innerText.toLowerCase())}>
                    MEN
                </div>

                <div
                    className={props.filter === 'all' ?
                        `${style.item} ${style.active}` : style.item}
                    onClick={(e) => props.onClick(e.target.innerText.toLowerCase())}>
                    All
                </div>

                <div
                    className={props.filter === 'women' ?
                        `${style.item} ${style.active}` : style.item}
                    onClick={(e) => props.onClick(e.target.innerText.toLowerCase())}>
                    WOMEN
                </div>

            </div>
        </div>
    );
};

export default Filters;