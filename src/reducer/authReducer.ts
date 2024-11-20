import {userAPI} from "../api/api";
import {setAuthUser} from "./authActions";

const initAuthState: any = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initAuthState, action: any) => {
    switch (action.type) {
        case 'SET_AUTH_USER': {
            return {
                ...state, ...action.payload, isAuth: true
            }
        }
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
                dispatch(setAuthUser({id, email, login}))
            }
        })
    }
}
