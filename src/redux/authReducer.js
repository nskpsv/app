import { stopSubmit } from "redux-form";
import { authApi } from "./../api/api.js";
import { requestProfile } from "./profileReducer.js";

let initialState = {isFetching: false};

export const setAuth = data => {
    return {
        type: 'SET_AUTH',
        data,
    };
};

export const login = data => dispatch => {
    dispatch(toggleFetching());
    dispatch(setError(null));

    authApi.login(data)
        .then(res => {
            if (res.resultCode === 0) {
                authApi.checkAuth()
                    .then(res => {
                        dispatch(requestProfile(res.data.id));
                        return res;
                    })
                    .then((res) => {
                        dispatch(setAuth(res));
                        dispatch(toggleFetching());
                    })
            } else {
                dispatch(toggleFetching());
                dispatch(stopSubmit('login', {_error: 'Неправильный Email или пароль'}));
            }
        });
};

export const logout = () => dispatch => {
      authApi.logout()
      .then(res => {
          if (!res.resultCode) {
              authApi.checkAuth()
              .then(res => {
                if (res.resultCode)
                dispatch(setAuth(res));
              })
          }    
      });
};

const toggleFetching = () => {
    return {
        type: 'TOGGLE_FETCHING'
    }
};

const setError = err => {
    return {
        type: 'SET_ERROR',
        err
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR': return {
            ...state,
            error: action.err
        }
        case 'TOGGLE_FETCHING': return {
            ...state,
            isFetching: !state.isFetching
        }
        case 'SET_AUTH':
         return {
            ...state,
            authData: {...action.data}
        }
        default: return state;
    }
};

export default authReducer;