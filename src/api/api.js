import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "56424395-908f-4dab-9f3e-9153c1543cf9"
    }
});


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    auth () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const follow_unfollow_API = {
    follow (id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}





