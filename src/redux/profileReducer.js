import { profileApi } from "../api/api";

const initialState = {
    profiles: {},
    followingQueue: [],
    isFetching: false,
};

export const uploadAvatar = (file, id) => (dispatch) => {
    profileApi.uploadAvatar(file)
        .then(res => {
            if (!res.resultCode) dispatch(updatePhotos(res.data.photos, id))
        })
}
export const requestProfile = id => dispatch => {
    dispatch(toggleFetching(true));
    Promise
        .all([profileApi.getProfileData(id), profileApi.getStatus(id), profileApi.getFollowStatus(id)])
        .then(([profile, status, followed]) => {
            profile.status = status;
            profile.followed = followed;
            profile.id = profile.userId;
            profile.name = profile.fullName;
            delete profile.userId;
            delete profile.fullName;
            delete profile.uniqueUrlName;
            dispatch(setProfile(profile));
            dispatch(toggleFetching(false));
        });
};
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowing(id, true));
        profileApi.follow(id)
            .then(res => {
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
        profileApi.unfollow(id)
            .then(res => {
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
export const setProfile = profile => {
    return {
        type: 'SET_PROFILE',
        profile,
    }
};
export const putStatus = status => dispatch => {

    profileApi.setStatus(status)
        .then(res => {
            if (!res.resultCode) dispatch(setStatus(status))
        })
};
export const saveProfile = values => dispatch => {
    dispatch(toggleFetching(true));
    profileApi.saveProfile(values)
    .then(res => {
        if (!res.resultCode) dispatch(requestProfile(values.id))
        else dispatch(toggleFetching(false));
    })
};

const toggleFollowing = (id, isFetching) => {
    return {
        type: 'TOGGLE_FOLLOWING',
        id,
        isFetching
    };
};
const followSuccess = id => {
    return {
        type: 'FOLLOW_USER_SUCCESS',
        id
    };
};
const unfollowSuccess = id => {
    return {
        type: 'UNFOLLOW_USER_SUCCESS',
        id
    };
};
const setStatus = status => {
    return {
        type: 'SET_STATUS',
        status
    }
};
const updatePhotos = (photos, id) => {
    return {
        type: 'UPDATE_PHOTOS',
        photos,
        id
    }
};
const toggleFetching = (status) => {
    return {
        type: 'TOGGLE_FETCHING',
        status
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FETCHING' : {
            return {
                ...state,
                isFetching: action.status
            }
        }
        case 'UPDATE_PHOTOS': {
            return {
                ...state,
                profiles: {
                    ...state.profiles,
                    [action.id]: {
                        ...state.profiles[action.id],
                        photos: action.photos
                    }
                }
            }
        }
        case 'TOGGLE_FOLLOWING': {
            return {
                ...state,
                followingQueue: action.isFetching
                    ? [...state.followingQueue, action.id]
                    : state.followingQueue.filter(id => id != action.id)
            };
        }
        case 'FOLLOW_USER_SUCCESS': {
            return {
                ...state,
                profiles: { ...state.profiles, [action.id]: { ...state.profiles[action.id], followed: true } }
            }
        }
        case 'UNFOLLOW_USER_SUCCESS': {
            return {
                ...state,
                profiles: { ...state.profiles, [action.id]: { ...state.profiles[action.id], followed: false } },
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                profiles: { ...state.profiles },
                [myId]: { ...state.profiles[myId], status: action.status },
            }
        }
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