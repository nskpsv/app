import React from "react";
import style from './Header.module.css';
import backImg from './assets/back.png';
import { Link } from "react-router-dom";


const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.back}>
                <Link to="/">
                    <img src={backImg} />
                </Link>
            </div>
            <div className={style.photo}>
                <img className={style.image} src={reebok} />
            </div>
            <div className={style.background}>
            </div>
        </div>
    );
};

export default Header;