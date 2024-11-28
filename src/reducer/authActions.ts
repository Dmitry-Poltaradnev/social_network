export const setAuthUser = ({id, email, login}: any) => {
    return {type: 'SET_AUTH_USER', payload: {id, email, login}};
}
export const setAuthLoading = (loadingState: boolean) => {
    return {type: 'SET_LOADING', payload: loadingState};
}
// export const setDeleteLogin = (logoutStatus : boolean) => {
//     return {type: 'LOGOUT_USER' , payload: {logoutStatus}};
// }

