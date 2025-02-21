import {axiosInstance} from "./api";

export type GetCaptchaType = {
    url: string
}

export const securityAPI = {
    getCaptcha() {
        return axiosInstance.get<GetCaptchaType>(`security/get-captcha-url`)
    }
}