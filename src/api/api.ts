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
    //     ====
    getProfileStatus() {
        // переписать по аналогу getProfile
        return axiosInstance.get(`profile/status/31665`).then(response => response.data)
    },
    putProfileStatusS(status: string) {
        return axiosInstance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    //     ====


}


