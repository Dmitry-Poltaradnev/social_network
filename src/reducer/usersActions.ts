
export const changeFollow = (id: string, followStatus: boolean) => {
    return ({type: 'CHANGE-FOLLOW', payload: {id, followStatus}});
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


