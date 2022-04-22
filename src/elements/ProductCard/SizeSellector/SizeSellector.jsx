import React from "react";
import style from './SizeSellector.module.css';

const SizeSellector = () => {
    return (
        <div className={style.size_selector}>
            <div className={style.headline}>
                <div className={style.title}>Size</div>
                <div className={style.country_switcer}>
                    <div className={style.item}>usa</div>
                    <div className={style.item}>uk</div>
                    <div className={style.item}>china</div>
                </div>
            </div>
            <div className={style.size_switcher}>
                <div className={style.item}>8"</div>
                <div className={style.item}>9"</div>
                <div className={style.item}>10"</div>
                <div className={style.item}>11"</div>
                <div className={style.item}>12"</div>
                <div className={style.item}>13"</div>
            </div>
        </div>
    );
};

export default SizeSellector;