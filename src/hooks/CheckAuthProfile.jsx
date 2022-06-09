import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi } from '../api/api';
import { setAuth } from '../redux/authReducer';
import { requestProfile } from "../redux/profileReducer";

const CheckAuthProfile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        authApi
        .checkAuth()
        .then((res) => {
            if (res.resultCode) {
                dispatch(setAuth(res));
                navigate('/login');
            } else {
                dispatch(requestProfile(res.data.id));
                dispatch(setAuth(res));
            }
        })
    }, []);
};

export default CheckAuthProfile;