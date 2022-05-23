import React from "react";
import style from './Products.module.css';
import starImg from './../../common/star.png';
import grayStarImg from './../../common/gray_star.png';
import { NavLink } from "react-router-dom";

const Products = (props) => {
    return (
        <div className={style.products}>
            {
                Object.keys(props.products).map((style) => {
                    return <BuildSlider
                        products={props.products[style]}
                        style={style}
                        onAddToCartClick={props.onAddToCartClick}
                        key={style} />
                })
            }
        </div>
    );
};

const BuildSlider = (props) => {

    let products = props.products.map((product) => {
        return <BuildProductItem
            product={product}
            onAddToCartClick={props.onAddToCartClick}
            key={product.id} />
    });

    return (
        <div className={style.categoryContainer}>
            <div className={style.header}>
                <div className={style.title}>
                    {props.style}
                </div>
                <a className={style.link} href="#">more</a>
            </div>
            <div className={style.slider}>
                {products}
            </div>
        </div>
    );
};

const BuildProductItem = (props) => {

    let product = props.product;
    let add = () => { props.onAddToCartClick(product.id)};

    return (
        <div className={style.item}
            key={product.id}>
            <div className={style.content}>
                <NavLink to='/product_card' className={style.image}>
                    <div className={style.background}>
                    </div>
                    <img className={style.photo} src={product.photo} />
                </NavLink>
                <div className={style.description}>
                    <div onClick={add}
                        className={style.add}>
                        +
                    </div>
                    <div className={style.info}>
                        <div className={style.price}>
                            ${product.price}
                        </div>
                        <Raiting grade={product.raiting} />
                    </div>
                    <div className={style.title}>
                        {product.title()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Raiting = ({ grade }) => {
    let stars = Array(5).fill(undefined);
    return (
        <div>
            {stars.map((_, i) => {
                if (i <= grade - 1) {
                    return <img src={starImg} key={i} />;
                }
                return <img src={grayStarImg} key={i} />;
            })}
        </div>
    );
};

export default Products;