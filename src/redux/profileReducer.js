const initialState = {userId: null}


export const setProfile = (profile) => {
    return {
        type: 'SET_PROFILE',
        profile,
    };
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                ...action.profile,
            };
        default: return state;
    };
};

export default profileReducer;