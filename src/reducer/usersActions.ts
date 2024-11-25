export const changeFollow = (id: string, followStatus: boolean) => {
    return ({type: 'CHANGE-FOLLOW', payload: {id, followStatus}});
}
export const setIsFollowing = (isFollowing: boolean, userId: string) => {
    return ({type: 'IS_FOLLOWING', payload: {isFollowing, userId}});
}
export const setUser = (users: any) => {
    return {type: 'SET_USERS', payload: {users}};
}
export const setTotalCount = (totalCount: number) => {
    return {type: 'SET_TOTAL_COUNT', payload: {totalCount}};
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET_CURRENT_PAGE', payload: {currentPage}};
}
export const toggleIsLoading = (isLoading: boolean) => {
    return {type: 'IS_LOADING', payload: {isLoading}}
}
export const setProfile = (user: any) => {
    return {type: 'SET_USER_PROFILE', payload: {user}};
}
// =====
export const setUserStatus = (status: string) => {
    return {type: 'GET_USER_STATUS', payload: {status}};
}
export const putProfileStatus = (status: string) => {
    return {type: 'PUT_USER_STATUS', payload: {status}};
}
export const getUserId = (userId: number) => {
    return {type: 'GET_USER_ID', payload: {userId}};
}




