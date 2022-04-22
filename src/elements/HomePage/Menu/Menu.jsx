import React from "react";
import style from './Menu.module.css';
import homeImg from './assets/home.png';
import giftImg from './assets/gift.png';
import cartImg from './assets/cart.png';
import favoriteImg from './assets/favorite.png';
import moreImg from './assets/more.png';
import { NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.tear}></div>
                <div className={style.buttons}>
                    <a className={style.home} href="">
                        <img src={homeImg} />
                    </a>
                    <a className={style.gift} href="">
                        <img src={giftImg} />
                    </a>
                    <div>
                        {!!props.shopCount && (
                            <div className={style.shopCount}>
                                {props.shopCount}
                            </div >
                        )}
                        <NavLink to='/cart' className={style.cart}>
                            <img src={cartImg} />
                        </NavLink>
                    </div>
                    <a className={style.favorite} href="">
                        <img src={favoriteImg} />
                    </a>
                    <a className={style.more} href="">
                        <img src={moreImg} />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Menu;