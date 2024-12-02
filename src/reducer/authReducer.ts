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
                ...state, ...action.payload, isAuth: true
            }
        }
        case 'SET_LOADING': {
            return {
                ...state, isLoading: action.payload
            }
        }
        // -----
        // case 'LOGOUT_USER': {
        //     return {
        //         ...state, id: null, email: null, login: null
        //     }
        // }
        // -----
        default : {
            return state;
        }
    }
}


export const getLoginThunkCreator = () => {
    return (dispatch: any) => {
        userAPI.getLogin().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUser({id, email, login , isAuth :  true}))
                dispatch(getUserId(id))
            }
        }).finally(() => {
            dispatch(setAuthLoading(false))
        })
    }
}
// ==========================================
export const deleteLoginThunkCreator = () => {
    return (dispatch: any) => {
        userAPI.logout().then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUser({id : null,email:  null, login:  null, isAuth:  false}))
            }
        }).finally(() => {
            dispatch(setAuthLoading(false))
        })
    }
}
// ===========================
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    return (dispatch: any) => {
        userAPI.login(email, password, rememberMe).then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(getLoginThunkCreator())
            }
        })
    }
}