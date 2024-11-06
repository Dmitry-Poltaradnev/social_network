// import {UserPropsType} from "../components/users/Users";

export const changeFollow = (id: string, followStatus: boolean) => {
    return ({type: 'CHANGE-FOLLOW', payload: {id, followStatus}});
}
export const setUser = (users: any) => {
    return {type: 'SET_USERS', payload: {users}};
}