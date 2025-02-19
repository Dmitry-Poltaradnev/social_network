import {
    CHANGE_FOLLOW, GET_USER_ID, GET_USER_STATUS,
    IS_FOLLOWING,
    IS_LOADING, PUT_USER_STATUS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USER_PROFILE,
    SET_USERS,
    SAVE_PHOTO_SUCCESS
} from "./userReducer";
import {PhotosProfileType, UsersType, ProfileType} from "../types/types";

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
    payload: { users: UsersType }
}

export type SetProfileType = {
    type: typeof SET_USER_PROFILE,
    payload: { user: ProfileType }
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

export type SetUserStatusType = {
    type: typeof GET_USER_STATUS,
    payload: { status: string }
}

export type PutProfileStatusType = {
    type: typeof PUT_USER_STATUS,
    payload: { status: string }
}

export type GetUserIdType = {
    type: typeof GET_USER_ID,
    payload: { userId: number }
}

export type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    payload: { photos: PhotosProfileType }
}

export const changeFollow = (id: number, followStatus: boolean): ChangeFollowType => {
    return ({type: CHANGE_FOLLOW, payload: {id, followStatus}});
}
export const setIsFollowing = (isFollowing: boolean, userId: number): SetIsFollowingType => {
    return ({type: IS_FOLLOWING, payload: {isFollowing, userId}});
}
export const setUser = (users: UsersType): SetUsersType => {
    return {type: SET_USERS, payload: {users}};
}
export const setTotalCount = (totalCount: number): SetTotalCountType => {
    return {type: SET_TOTAL_COUNT, payload: {totalCount}};
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}};
}
export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingType => {
    return {type: IS_LOADING, payload: {isLoading}}
}
export const setProfile = (user: ProfileType): SetProfileType => {
    return {type: SET_USER_PROFILE, payload: {user}};
}
export const setUserStatus = (status: string): SetUserStatusType => {
    return {type: GET_USER_STATUS, payload: {status}};
}
export const putProfileStatus = (status: string): PutProfileStatusType => {
    return {type: PUT_USER_STATUS, payload: {status}};
}
export const getUserId = (userId: number): GetUserIdType => {
    return {type: GET_USER_ID, payload: {userId}};
}
export const savePhotoSuccess = (photos: PhotosProfileType): SavePhotoSuccessType => {
    return {type: SAVE_PHOTO_SUCCESS, payload: {photos}};
}






