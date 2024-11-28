import {userAPI} from "../api/api";
import {setAuthLoading, setAuthUser} from "./authActions";
import {getUserId} from "./usersActions";

const initAuthState: any = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true,
//     logout: null
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
        //         ...state, logout: true
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
                dispatch(setAuthUser({id, email, login}))
                dispatch(getUserId(id))
            }
        }).finally(() => {
            dispatch(setAuthLoading(false))
        })
    }
}
// ==========================================
// export const deleteLoginThunkCreator = () => {
//     return (dispatch: any) => {
//         userAPI.deleteLogin().then((data) => {
//             if (data.resultCode === 0) {
//                 dispatch(setDeleteLogin(false))
//             }
//         }).finally(() => {
//             dispatch(setAuthLoading(false))
//         })
//     }
// }
