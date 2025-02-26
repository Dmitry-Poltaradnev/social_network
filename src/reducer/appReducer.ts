import {getLoginThunkCreator} from "./authReducer";
import {setInitialized, SetInitializedActionType} from "./appActions";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

export const SET_INITIALIZED = 'SET_INITIALIZED'

type AppActions = SetInitializedActionType;

type ThunkActionType = ThunkAction<void, AppStateType, unknown, AppActions>;

const initAuthState = {
    initialized: false
}
export type InitAuthStateType = typeof initAuthState

export const appReducer = (state = initAuthState, action: AppActions): InitAuthStateType => {
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

export const initializeApp = (): ThunkActionType => (dispatch) => {
    let promise = dispatch(getLoginThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}
