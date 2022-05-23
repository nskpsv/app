let initialState = null;


export const setAuth = (data) => {
    return {
        type: 'SET_AUTH',
        data,
    };
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH': { 
            return {
                ...state,
                 ...action.data
            }
        }
        default: return state;
    }
};

export default authReducer;