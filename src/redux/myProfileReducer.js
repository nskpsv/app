import { profileApi } from "../api/api";

const initialState = null

export const getMyProfile = (id) => {

    return (dispatch) => {
        Promise
        .all([profileApi.getProfileData(id), profileApi.getStatus(id)])
        .then(([profile, status]) => {
            profile.status = status;
            dispatch(setMyProfile(profile));
        })
        .catch(err => console.log(err));
    }
}

export const setMyProfile = (profile) => {
    return {
        type: 'SET_MY_PROFILE',
        profile
    }
};

export const setMystatus = (status) => {
    return {
        type: 'SET_MY_STATUS',
        status
    }
};

const myProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_MY_PROFILE':
            return {
                ...action.profile
            };
        case 'SET_MY_STATUS':
            return {
                ...state,
                status: action.status
            };
        default: return state
    };
};

export default myProfileReducer;