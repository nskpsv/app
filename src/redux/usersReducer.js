const initialState = {
    usersList: [],
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

export const followUser = (id) => {
    return {
        type: 'FOLLOW_USER',
        id
    };
};

export const unFollowUser = (id) => {
    return {
        type: 'UNFOLLOW_USER',
        id
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

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                usersList: [...action.users.items],
                totalUsers: action.users.totalCount,
            };
        case 'FOLLOW_USER':
            return {
                ...state,
                usersList: state.usersList.map(user =>
                    user.id === action.id
                        ? { ...user, followed: true }
                        : user)
            };
        case 'UNFOLLOW_USER':
            return {
                ...state,
                usersList: state.usersList.map(user =>
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
        default: {
            return state;
        };
    };
};

export default usersReducer;