import {PhotosProfileType, ProfileType} from "../types/types";
import {GET_USER_STATUS, IS_LOADING, PUT_USER_STATUS, SAVE_PHOTO_SUCCESS, SET_USER_PROFILE} from "./profileReducer";

export type SetUserStatusType = {
    type: typeof GET_USER_STATUS,
    payload: { status: string }
}

export type PutProfileStatusType = {
    type: typeof PUT_USER_STATUS,
    payload: { status: string }
}

export type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    payload: { photos: PhotosProfileType }
}

export type SetProfileType = {
    type: typeof SET_USER_PROFILE,
    payload: { user: ProfileType }
}

export type ToggleIsLoadingType = {
    type: typeof IS_LOADING,
    payload: { isLoading: boolean }
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

export const savePhotoSuccess = (photos: PhotosProfileType): SavePhotoSuccessType => {
    return {type: SAVE_PHOTO_SUCCESS, payload: {photos}};
}