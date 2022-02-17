import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cdd3bfe2-fd96-44f2-8b73-c222490cb3a8"
    }
});


export const usersAPI = {
    getUsers (requestPage = 1, pageSize = 10) {
        return instance.get(`users?page=${requestPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    acceptFollow (id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },

    acceptUnfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout () {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}


export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}



