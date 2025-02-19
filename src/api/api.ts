import axios from "axios";
import {ProfileType} from "../types/types";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0570d7e8-028b-4976-ac64-ded2181cd92b'}
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

// type UserType = {
//     name: string
//     id: number
//     status: string
//     followed: boolean
//     photos: {
//         small: string
//         large: string
//     }
// }
//
// type GetUserType = {
//     items: Array<UserType>
//     totalCount: number
//     error: string
// }

type GetLoginType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LogoutType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}

type LoginType = {
    resultCode: ResultCodeForCaptcha | ResultCodeEnum
    messages: Array<string>
    data: any
}

type PutProfileStatusType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}
type GetCaptchaType = {
    url: string
}
// type PutSavePhotoType = {
//     data: { photos: PhotosProfileType }; // Должно быть так
// };
// type GetProfileType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
// }

export const userAPI = {
    getUser(currentPage: number = 2, pageSize: number = 15) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getLogin() {
        return axiosInstance.get<GetLoginType>(`auth/me`).then(response => response.data)
    },
    logout() {
        return axiosInstance.delete<LogoutType>(`auth/login`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return axiosInstance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    getProfile(userId: number) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    changeUserFollow(method: any, id: number) {
        return axiosInstance({
            method: method,
            url: `follow/${id}`
        }).then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data)
    },
    putProfileStatus(newUserStatus: string) {
        return axiosInstance.put<PutProfileStatusType>(`profile/status`, {status: newUserStatus}).then(response => response.data)
    },
    putSavePhoto(photos: any) {
        const formData = new FormData();
        formData.append('image', photos)
        return axiosInstance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileType) {
        return axiosInstance.put(`profile`, profile)
    },
    getCaptcha() {
        return axiosInstance.get<GetCaptchaType>(`security/get-captcha-url`)
    },
}


