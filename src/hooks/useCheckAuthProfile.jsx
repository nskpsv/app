import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi } from '../api/api';
import { setAuth } from '../redux/authReducer';
import { getProfile } from "../redux/profileReducer";

const useCheckAuthProfile = () => {

    const state = useSelector(state => state.auth );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        authApi
            .checkAuth()
        .then((res) => {
            dispatch(setAuth(res))
            if (res.resultCode) {
                navigate('/login')
            } else {
                dispatch(getProfile(res.data.id))
            }
        })
    }, []);
};

export default useCheckAuthProfile;