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