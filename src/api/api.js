import * as axios from 'axios';

const api = axios.create({
    withCredentials: (true),
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'e5ab5f91-d41e-41f2-ad43-5816e4a9ffe7' },
});

export const usersApi = {

    getFollowStatus: (id = null) => {
        return api
            .get(`follow/${id}`)
            .then(res => { return res.data });
    },

    getUsers: (params = { count: 20, page: 1 }) => {
        return api
            .get(`users/`, { params })
            .then(response => { return response.data });
    },

    follow: (id) => {
        return api
            .post(`follow/${id}`)
            .then(res => { return res.data });
    },

    unfollow: (id) => {
        return api
            .delete(`follow/${id}`)
            .then(res => { return res.data });
    },
};

export const authApi = {
    checkAuth: () => {
        return api
            .get('auth/me')
            .then(res => { return res.data })
    }
};

export const profileApi = {
    getProfileData: (id) => {
        return api
            .get('/profile/' + id)
            .then(res => { return res.data })
    },

    getStatus: (id) => {
        return api
            .get('/profile/status/' + id)
            .then(res => { return res.data })
    }
};