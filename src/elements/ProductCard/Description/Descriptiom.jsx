import React from "react";
import style from './Description.module.css';
import starImg from './../../../common/star.png';
import grayStarImg from './../../../common/gray_star.png';

const Description = () => {
    return (
        <div className={style.description}>
            <div className={style.header}>
                <div className={style.product_ame}>
                    reebok red run
                </div>
                <div className={style.price}>
                    75
                </div>
            </div>
            <div className={style.rating}>
                <div className={style.grade}>
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={grayStarImg} />
                </div>
                <div className={style.reviews_count}>
                    8,712
                </div>
            </div>
            <div className={style.description_text}>
                The Reebok Red Run is on amazing sportswear for the rest of us. It`s affordable
                premium quality. The more your wear it the more you will enjoy it. The nylon mesh ensures air flow at
                maximum level. Our customers rated it top. It`s also water  splash proof, makinf it the perfect companion
                on rain.
            </div>
            <a className={style.details} href="">
                more details
            </a>
        </div>
    );
};

export default Description;