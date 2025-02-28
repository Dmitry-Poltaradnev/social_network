import {axiosInstance, ResponseType, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    getLogin() {
        return axiosInstance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return axiosInstance.post<ResponseType<MeResponseDataType, ResultCodeEnum | ResultCodeForCaptcha>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return axiosInstance.delete(`auth/login`)
    }
}