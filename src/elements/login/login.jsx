import React, { useEffect } from "react";
import style from './login.module.css';
import LoginForm from "./loginForm";
import { login } from './../../redux/authReducer';
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../preloader/Preloader";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { isFetching, error, authData } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = values => {
        dispatch(login(values));
    }

    useEffect(() => {
        if (!authData.resultCode)
            if (authData.data.id) navigate('/')
    }, [authData.data.id])

    return (
        isFetching
            ? <Preloader />
            : <div className={style.wrapper}>
                <h1 className={style.header}>Login</h1>
                <LoginForm loginError={error} onSubmit={onSubmit} />
            </div>
    )

}

export default Login;