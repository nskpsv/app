import React from 'react';
import { Link } from "react-router-dom";
import style from './HomePage.module.css';
import { useSelector } from 'react-redux';
import Status from '../../elements/status/Status.jsx';

const HomePage = () => {
    const authData = useSelector((state) => { return state.auth })


    return (
        !authData.resultCode
            ? <div className={style.container}>
                <p>Вы авторизовались как:</p>
                <p>{authData.data.login}</p>
                <p>id: {authData.data.id}</p>
                <p>E-mail: {authData.data.email}</p>
                <Status status="Hello!!!" />
                <Link to='/users'> Users </Link>
            </div>
            : <div className={style.container}>
                <div>{authData.messages}</div>
                <Link to='/login'> Login </Link>
            </div>
    )
};

export default HomePage;