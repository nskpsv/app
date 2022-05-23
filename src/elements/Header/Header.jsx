import React from "react";
import style from './Header.module.css';
import avatar from './assets/avatar.png'
const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.title}>
                Explore
            </div>
            <div>
                <img className={style.avatar} src={avatar} />
            </div>
        </div>
    );
};

export default Header;