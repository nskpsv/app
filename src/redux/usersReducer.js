import { usersApi } from "../api/api.js";
import { setProfile } from "./profileReducer";

const initialState = {
    users: [],
    followingQueue: [],
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
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowing(id, true));
        usersApi.follow(id)
        .then( res => { 
            console.log(res);
            if (!res.resultCode) {
                dispatch(toggleFollowing(id, false));
                dispatch(followSuccess(id))
            } else {
                dispatch(unfollowSuccess(id));
                alert(`Произошла ошибка ${res.messages}`);
            }
        });
    };
};
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowing(id, true));
        usersApi.unfollow(id)
        .then( res => { 
            if (!res.resultCode) {
                dispatch(toggleFollowing(id, false));
                dispatch(unfollowSuccess(id))
            } else {
                dispatch(followSuccess(id));
                alert(`Произошла ошибка ${res.messages}`);
            }
        });
    };
};
const toggleFollowing = (id, isFetching) => {
    return {
        type: 'TOGGLE_FOLLOWING',
        id,
        isFetching
    };
};
const followSuccess = (id) => {
    return {
        type: 'FOLLOW_USER_SUCCESS',
        id
    };
};
const unfollowSuccess = (id) => {
    return {
        type: 'UNFOLLOW_USER_SUCCESS',
        id
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
        case 'FOLLOW_USER_SUCCESS': 
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id
                        ? { ...user, followed: true }
                        : user)
            }
        case 'UNFOLLOW_USER_SUCCESS':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id
                        ? { ...user, followed: false }
                        : user)
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
        case 'TOGGLE_FOLLOWING':
            return {
                ...state,
                followingQueue: action.isFetching
                    ? [...state.followingQueue, action.id]
                    : state.followingQueue.filter(id => id != action.id)
            };            
        default: {
            return state;
        };
    };
};

export default usersReducer;