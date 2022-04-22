import React from "react";
import style from './ProductCard.module.css';
import Header from './Header/Header.jsx';
import Description from './Description/Descriptiom.jsx';
import SizeSellector from './SizeSellector/SizeSellector.jsx';
import Buttons from './Buttons/Buttons.jsx';

const ProductCard = (props) => {
    return (
        <div className={style.productCard}>
            <Header productImg = {props.productImg} />
            <Description />
            <SizeSellector />
            <Buttons />
        </div>
    );
};

export default ProductCard;