import {userAPI} from "../api/api";
import {setAuthLoading, setAuthUser} from "./authActions";
import {getUserId} from "./usersActions";

const initAuthState: any = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true,
}

export const authReducer = (state = initAuthState, action: any) => {
    switch (action.type) {
        case 'SET_AUTH_USER': {
            return {
                ...state, ...action.payload
            }
        }
        case 'SET_LOADING': {
            return {
                ...state, isLoading: action.payload
            }
        }
        default : {
            return state;
        }
    }
}
export const getLoginThunkCreator = () => {
    console.log('getLoginThunkCreator')
    return (dispatch: any) => {
        userAPI.getLogin().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUser({id, email, login, isAuth: true}))
                dispatch(getUserId(id))
            }
        }).finally(() => {
            dispatch(setAuthLoading(false))
        })
    }
}
export const deleteLoginThunkCreator = () => {
    return (dispatch: any) => {
        userAPI.logout().then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUser({id: null, email: null, login: null, isAuth: false}))
            }
        })
    }
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    console.log(email, password, rememberMe)
    return (dispatch: any) => {
        userAPI.login(email, password, rememberMe).then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(getLoginThunkCreator())
            }
        })
    }
}