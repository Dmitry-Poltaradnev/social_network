import {getLoginThunkCreator} from "./authReducer";
import {setInitialized} from "./appActions";

const initAuthState: any = {
    initialized: false
}

export const appReducer = (state = initAuthState, action: any) => {
    switch (action.type) {
        case 'SET_INITIALIZED': {
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
