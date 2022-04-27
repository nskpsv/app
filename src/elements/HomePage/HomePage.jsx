import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import { Link } from "react-router-dom";
import Header from './Header/Header.jsx';
import CategoriesContainer from './Categories/CategoriesContainer.js';
import FiltersContainer from './Filters/FiltersContainer.js';
import ProductsConatiner from './Products/ProductsConatiner.js';
import MenuContainer from './Menu/MenuContainer.js';
import style from './HomePage.module.css';
import UsersContainer from './../Users/UsersContainer.js';

const HomePage = () => {

    let [state, setState] = useState(null);
    let isAutorised = state && !state.resultCode;

    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(response => {
                state = { ...response.data };
                setState(state);
            });
    }, []);

    if (!state) {
        return <p>loading</p>
    }
    return (
        isAutorised
            ? <div>
                <p>Вы авторизовались как:</p>
                <p>{state.data.login}</p>
                <p>id: {state.data.id}</p>
                <p>E-mail: {state.data.email}</p>
                <Link to='/users'> Users </Link>
            </div>
            : <div>{state.messages}</div>


        /* <div>
             <UsersContainer />
         </div>*/
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