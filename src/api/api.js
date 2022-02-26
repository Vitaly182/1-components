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
    },
    acceptFollow (id) {
        return instance.post(`follow/${id}`, {})
    },

    acceptUnfollow (id) {
        return instance.delete(`follow/${id}`)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}



