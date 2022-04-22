import React from "react";
import style from './Categories.module.css';
import { NavLink } from "react-router-dom";

const Categories = (props) => {
    return (
        <div className={style.categories}>
            {props.categories.map(item => {

                const clickOnCategoty = () => props.onClick(item.title);

                return (
                    <NavLink to={`/`}
                        className={ props.filter === item.title
                            ? `${style.item} ${style.active}`
                            : style.item}
                        key={item.id.toString()}
                        onClick={clickOnCategoty}>
                        <div>
                            <div className={style.image}>
                                <img src={item.image} />
                            </div>
                            <div className={style.title}>
                                {item.title}
                            </div>
                        </div>
                    </NavLink>
                );
            })}
        </div >
    );
};



export default Categories;