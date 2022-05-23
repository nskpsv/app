import { profileApi, usersApi } from "../api/api";

const initialState = { profiles: {} };

export const getProfile = (id) => {

    return (dispatch) => {
        Promise
            .all([profileApi.getProfileData(id), profileApi.getStatus(id), usersApi.getFollowStatus(id)])
            .then(([profile, status, followed]) => {
                profile.status = status;
                profile.followed = followed;
                profile.id = profile.userId;
                profile.name = profile.fullName;
                delete profile.userId;
                delete profile.fullName;
                delete profile.uniqueUrlName;

                dispatch(setProfile(profile));
            });
    };
};

export const setProfile = (profile) => {
    return {
        type: 'SET_PROFILE',
        profile,
    }
};

export const setStatus = (status) => {
    
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE': {
            return Array.isArray(action.profile) ?
                {
                    ...state,
                    profiles: Object.assign
                        (
                            { ...state.profiles },
                            action.profile.reduce((result, p) => result = { ...result, [p.id]: p }, {})
                        )
                }
                :
                {
                    ...state,
                    profiles: { ...state.profiles, [action.profile.id]: action.profile }
                }
        }
        default: return state;
    };
};

export default profileReducer;