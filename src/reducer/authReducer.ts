import {userAPI} from "../api/api";
import {
    setAuthLoading,
    SetAuthLoadingType,
    setAuthUser,
    SetAuthUserType,
    setCaptcha,
    SetCaptchaType
} from "./authActions";
import {getUserId} from "./usersActions";
import {stopSubmit} from "redux-form";

export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_LOADING = 'SET_LOADING'
export const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

type AuthActions = SetAuthUserType | SetAuthLoadingType | SetCaptchaType

const initAuthState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    isLoading: true,
    rememberMe: false,
    captchaUrl: null as string | null,
}

type InitAuthStateType = typeof initAuthState

export const authReducer = (state = initAuthState, action: AuthActions): InitAuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state, ...action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state, isLoading: action.payload
            }
        }
        case SET_CAPTCHA_URL: {
            return {...state, captchaUrl: action.payload.captchaUrl}
        }
        default : {
            return state;
        }
    }
}
export const getLoginThunkCreator = () => async (dispatch: any) => {
    try {
        const data = await userAPI.getLogin();
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUser({id, email, login, isAuth: true}));
            dispatch(getUserId(id));
        }
    } catch (error) {
        console.error('Error fetching login data:', error);
    } finally {
        dispatch(setAuthLoading(false));
    }
};

export const deleteLoginThunkCreator = () => async (dispatch: any) => {
    try {
        const data = await userAPI.logout()
        if (data.data.resultCode === 0) {
            dispatch(setAuthUser({id: null, email: null, login: null, isAuth: false}))
        }
    } catch (error) {
        console.log('Error deleting login data:', error);
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    try {
        const data = await userAPI.login(email, password, rememberMe, captcha)
        if (data.data.resultCode === 0) {
            dispatch(getLoginThunkCreator())
        } else {
            if (data.data.resultCode === 10) {
                dispatch(getCaptchaThunkCreator())
            }
            throw new Error(data.data.messages.length > 0 ? data.data.messages[0] : 'Some error!');
        }
    } catch (error: any) {
        const errorMessage = error.message || 'Failed to connect to server!';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}

export const getCaptchaThunkCreator = () => async (dispatch: any) => {
    try {
        const response = await userAPI.getCaptcha()
        const captchaUrl = response.data.url
        dispatch(setCaptcha(captchaUrl));
    } catch (error: any) {
        console.log(error)
    }
}
