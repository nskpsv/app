import React from "react";
import style from './Buttons.module.css';
import plusImg from './../../../common/plus.png';

const Buttons = () => {
    return (
        <div className={style.buttons}>
            <div className={style.buttonAdd}>
                <img src={plusImg} />
                <div className={style.title}>add to bag</div>
            </div>
        </div>
    );
};

export default Buttons;