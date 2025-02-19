import {ResultCodeEnum, ResultCodeForCaptcha, userAPI} from "../api/api";
import {
    setAuthLoading,
    SetAuthLoadingType,
    SetAuthProfileType,
    setAuthUser,
    setCaptcha,
    SetCaptchaType
} from "./authActions";
import {getUserId, GetUserIdType} from "./usersActions";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_LOADING = 'SET_LOADING'
export const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

type AuthActions = SetAuthProfileType | SetAuthLoadingType | SetCaptchaType | GetUserIdType

type ThunkActionType = ThunkAction<void, AppStateType, unknown, AuthActions>;

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
            return {...state, captchaUrl: action.payload}
        }
        default : {
            return state;
        }
    }
}
export const getLoginThunkCreator = (): ThunkActionType => async (dispatch) => {
    try {
        const data = await userAPI.getLogin();
        if (data.resultCode === ResultCodeEnum.Success) {
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

export const deleteLoginThunkCreator = (): ThunkActionType => async (dispatch) => {
    try {
        const data = await userAPI.logout()
        if (data.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setAuthUser({id: null, email: null, login: null, isAuth: false}))
        }
    } catch (error) {
        console.log('Error deleting login data:', error);
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType => async (dispatch) => {
    try {
        const data = await userAPI.login(email, password, rememberMe, captcha)
        if (data.data.resultCode === ResultCodeEnum.Success) {
            dispatch(getLoginThunkCreator())
        } else {
            if (data.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaThunkCreator())
            }
            throw new Error(data.data.messages.length > 0 ? data.data.messages[0] : 'Some error!');
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to connect to server!';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
};

export const getCaptchaThunkCreator = (): ThunkActionType => async (dispatch) => {
    try {
        const response = await userAPI.getCaptcha()
        const captchaUrl: string = response.data.url
        dispatch(setCaptcha(captchaUrl));
    } catch (error) {
        console.log(error)
    }
}
