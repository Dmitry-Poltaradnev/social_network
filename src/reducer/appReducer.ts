import {getLoginThunkCreator} from "./authReducer";
import {setInitialized} from "./appActions";

export const SET_INITIALIZED = 'SET_INITIALIZED'

export type InitAuthStateType = {
    initialized: boolean,
}

const initAuthState: InitAuthStateType = {
    initialized: false
}

export const appReducer = (state = initAuthState, action: any): InitAuthStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state, initialized: true
            }
        }
        default : {
            return state;
        }
    }
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getLoginThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}
