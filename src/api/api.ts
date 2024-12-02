import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0570d7e8-028b-4976-ac64-ded2181cd92b'}
})

export const userAPI = {
    getUser(currentPage: number = 2, pageSize: number = 15) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getLogin() {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },
    // ======
    logout() {
        return axiosInstance.delete(`auth/login`)
    },
    login(email: string, password: string, rememberMe = false) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe})
    },
    // ====
    getProfile(userId: string) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    changeUserFollow(method: any, id: string) {
        return axiosInstance({
            method: method,
            url: `follow/${id}`
        }).then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data)
    },
    putProfileStatus(newUserStatus: string) {
        return axiosInstance.put(`profile/status`, {status: newUserStatus}).then(response => response.data)
    }
}


