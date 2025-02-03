import {SET_AUTH_USER, SET_CAPTCHA_URL, SET_LOADING} from "./authReducer";

type SetAuthUserPayLoadType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserType = {
    type: typeof SET_AUTH_USER,
    payload: SetAuthUserPayLoadType
}

type SetAuthLoadingType = {
    type: typeof SET_LOADING;
    payload: boolean
}
type SetCaptchaType = {
    type: typeof SET_CAPTCHA_URL,
    payload: { captchaUrl: string }
}

export const setAuthUser = ({id, email, login, isAuth}: SetAuthUserPayLoadType): SetAuthUserType => {
    return {type: SET_AUTH_USER, payload: {id, email, login, isAuth}};
}
export const setAuthLoading = (loadingState: boolean): SetAuthLoadingType => {
    return {type: SET_LOADING, payload: loadingState};
}
export const setCaptcha = (captchaUrl: string): SetCaptchaType => {
    return {type: SET_CAPTCHA_URL, payload: {captchaUrl}};
}


