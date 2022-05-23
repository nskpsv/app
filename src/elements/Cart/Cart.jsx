import React from "react";
import style from './Cart.module.css';
import { Raiting } from '../Products/Products.jsx';
import { NavLink } from "react-router-dom";

const Cart = (props) => {

    const productsList = props.productsList.map((product) => {
        return (
            <div className={style.container} key={product.id}>
                <div className={style.item}>
                    <div className={style.content}>
                        <NavLink to='/product_card' className={style.image}>
                            <div className={style.background}>
                            </div>
                            <img className={style.photo} src={product.photo} />
                        </NavLink>
                        <div className={style.description}>
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
                <div className={style.controllElements}>
                    <button onClick={() => props.onDelete(product.id)}> Удалить </button>
                    <div className={style.counter}>
                        <button onClick={() => props.onDecrement(product.id)}> - </button>
                        <div>{product.count}</div>
                        <button onClick={() => props.onIncrement(product.id)}> + </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            {productsList}
        </div>
    );
}

export default Cart;