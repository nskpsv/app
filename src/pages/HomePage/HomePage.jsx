import React, {useRef} from 'react';
import { Link, Navigate } from "react-router-dom";
import style from './HomePage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Status from '../../elements/status/Status.jsx';
import { logout } from '../../redux/authReducer';

const HomePage = () => {
    const {resultCode, data: {id, email}} = useSelector(state => state.auth.authData);
    const profile = useRef(useSelector(state => state.profile.profiles[id])).current;
    const dispatch = useDispatch();
    const onLogout = () =>{
        dispatch(logout());
        <Navigate to={'/login'} />
    }

    return (
        !resultCode && profile
            ? <div className={style.container}>
                <p>Вы авторизовались как:</p>
                <p>{profile.name}</p>
                <Link to={'/profile/' + profile.id}>id: {profile.id}</Link>
                <p>E-mail: {email}</p>
                <Status status={profile.status} editable={true}/>
                <Link to='/users'> Users </Link>
                <div className={style.logout}>
                <button className={style.logout} onClick={onLogout} >Logout</button>
                </div>
            </div>
            : <Navigate to='/login' /> 
    )
};

export default HomePage;