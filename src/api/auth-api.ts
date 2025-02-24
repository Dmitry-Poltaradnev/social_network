import {axiosInstance, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

export type GetLoginType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export type LogoutType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}

export type LoginType = {
    resultCode: ResultCodeForCaptcha | ResultCodeEnum
    messages: Array<string>
    data: any
}

export const authAPI = {
    getLogin() {
        return axiosInstance.get<GetLoginType>(`auth/me`).then(response => response.data)
    },
    logout() {
        return axiosInstance.delete<LogoutType>(`auth/login`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return axiosInstance.post<LoginType>(`auth/login`, {email, password, rememberMe, captcha})
    }
}