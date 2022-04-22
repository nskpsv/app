import React from "react";
import Header from './Header/Header.jsx';
import CategoriesContainer from './Categories/CategoriesContainer.js';
import FiltersContainer from './Filters/FiltersContainer.js';
import ProductsConatiner from './Products/ProductsConatiner.js';
import MenuContainer from './Menu/MenuContainer.js';
import style from './HomePage.module.css';
import UsersContainer from './../Users/UsersContainer.js';

const HomePage = () => {
    return (
        <div>
            <UsersContainer />
        </div>
      /*  <div className={style.homePage}>
            <Header />
            <CategoriesContainer />
            <FiltersContainer />
            <ProductsConatiner />
            <MenuContainer />
        </div>*/
    )
}

export default HomePage;