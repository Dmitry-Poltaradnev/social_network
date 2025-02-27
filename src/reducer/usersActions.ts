import {
    CHANGE_FOLLOW, GET_USER_ID,
    IS_FOLLOWING,
    IS_LOADING,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
} from "./userReducer";
import {UserType} from "../types/types";

export type ChangeFollowType = {
    type: typeof CHANGE_FOLLOW,
    payload: { id: number, followStatus: boolean }
}

export type SetIsFollowingType = {
    type: typeof IS_FOLLOWING,
    payload: { isFollowing: boolean, userId: number }
}

export type SetUsersType = {
    type: typeof SET_USERS,
    payload: { users: UserType[] }
}

export type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT,
    payload: { totalCount: number }
}

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    payload: { currentPage: number }
}

export type ToggleIsLoadingType = {
    type: typeof IS_LOADING,
    payload: { isLoading: boolean }
}

export type GetUserIdType = {
    type: typeof GET_USER_ID,
    payload: { userId: number }
}

export const changeFollow = (id: number, followStatus: boolean): ChangeFollowType => {
    return ({type: CHANGE_FOLLOW, payload: {id, followStatus}});
}

export const setIsFollowing = (isFollowing: boolean, userId: number): SetIsFollowingType => {
    return ({type: IS_FOLLOWING, payload: {isFollowing, userId}});
}

export const setUser = (users: UserType[]): SetUsersType => ({
    type: "SET_USERS",
    payload: {users}
});

export const setTotalCount = (totalCount: number): SetTotalCountType => {
    return {type: SET_TOTAL_COUNT, payload: {totalCount}};
}

export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}};
}

export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingType => {
    return {type: IS_LOADING, payload: {isLoading}}
}

export const getUserId = (userId: number): GetUserIdType => {
    return {type: GET_USER_ID, payload: {userId}};
}







