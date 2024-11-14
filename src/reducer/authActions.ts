export const setAuthUser = ({id, email, login}: any) => {
    return {type: 'SET_AUTH_USER', payload: {id, email, login}};
}