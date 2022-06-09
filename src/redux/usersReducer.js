import { usersApi } from "../api/api.js";
import { setProfile } from "./profileReducer";

const initialState = {
    users: [],
    pageSize: 20,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
};

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        users
    };
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    };
};
export const changePage = (currentPage) => {
    return {
        type: 'CHANGE_PAGE',
        currentPage
    };
};
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setUsers({ items: [] }));
        dispatch(toggleIsFetching(true));
        usersApi.getUsers({ count: pageSize, page: currentPage })
            .then(res => {
                dispatch(setUsers(res));
                dispatch(setProfile(res.items))
                dispatch(toggleIsFetching(false));
            });
    };
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users.items.map(usr => usr.id),  
                totalUsers: action.users.totalCount,
            };
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        default: {
            return state;
        };
    };
};

export default usersReducer;