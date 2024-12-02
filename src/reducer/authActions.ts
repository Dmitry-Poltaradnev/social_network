export const setAuthUser = ({id, email, login , isAuth}: any) => {
    return {type: 'SET_AUTH_USER', payload: {id, email, login, isAuth}};
}
export const setAuthLoading = (loadingState: boolean) => {
    return {type: 'SET_LOADING', payload: loadingState};
}


