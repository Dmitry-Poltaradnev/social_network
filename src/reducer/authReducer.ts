import {userAPI} from "../api/api";
import {setAuthLoading, setAuthUser} from "./authActions";
import {getUserId} from "./usersActions";
import {stopSubmit} from "redux-form";

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


export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    try {
        const data = await userAPI.login(email, password, rememberMe)
        if (data.data.resultCode === 0) {
            dispatch(getLoginThunkCreator())
        } else {
            throw new Error(data.data.messages.length > 0 ? data.data.messages[0] : 'Some error!');
        }
    } catch (error: any) {
        const errorMessage = error.message || 'Failed to connect to server!';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}