import {SET_AUTH_USER, SET_CAPTCHA_URL, SET_LOADING} from "./authReducer";

export const setAuthUser = ({id, email, login, isAuth}: any) => {
    return {type: SET_AUTH_USER, payload: {id, email, login, isAuth}};
}
export const setAuthLoading = (loadingState: boolean) => {
    return {type: SET_LOADING, payload: loadingState};
}
export const setCaptcha = (captchaUrl: string) => {
    return {type: SET_CAPTCHA_URL, payload: {captchaUrl}};
}


