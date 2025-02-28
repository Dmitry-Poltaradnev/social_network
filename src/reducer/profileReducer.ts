import {
    putProfileStatus,
    PutProfileStatusType, savePhotoSuccess,
    SavePhotoSuccessType, setProfile,
    SetProfileType,
    setUserStatus,
    SetUserStatusType, toggleIsLoading, ToggleIsLoadingType
} from "./profileActions";
import {AnyAction, Dispatch} from "redux";
import {ContactsProfileType, PhotosProfileType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {AppStateType} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
export const GET_USER_STATUS = 'GET_USER_STATUS'
export const PUT_USER_STATUS = 'PUT_USER_STATUS'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const IS_LOADING = 'IS_LOADING'

export type ProfileActions =
    | SetUserStatusType
    | PutProfileStatusType
    | SavePhotoSuccessType
    | SetProfileType
    | ToggleIsLoadingType


const initState = {
    newUserStatus: '',
    user: {
        id: 0,
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: '',
        photos: {small: null as string | null, large: null as string | null},
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        }
    }
}

type ProfileInitStateType = typeof initState

export const profileReducer = (state: ProfileInitStateType = initState, action: ProfileActions): ProfileInitStateType => {
    switch (action.type) {
        case SET_USER_PROFILE : {
            return {...state, user: action.payload.user}
        }
        case GET_USER_STATUS : {
            return {...state, newUserStatus: action.payload.status}
        }
        case PUT_USER_STATUS : {
            return {...state, newUserStatus: action.payload.status}
        }
        case SAVE_PHOTO_SUCCESS : {
            return {
                ...state, user: {
                    ...state.user, photos: action.payload.photos
                }
            }
        }
        default :
            return state;
    }
}

export const setUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<ProfileActions>) => {
    try {
        let data: ProfileType = await profileAPI.getProfile(userId)
        dispatch(setProfile(data))
        if (data.photos) {
            dispatch(savePhotoSuccess(data.photos));
        }
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
}

export const setUserStatusThunkCreator = () => async (dispatch: Dispatch<ProfileActions>, getState: () => AppStateType) => {
    try {
        const userId = getState().user.userId; // Получаем userId из состояния
        if (!userId) {
            console.error("userId отсутствует в состоянии");
            return;
        }
        dispatch(toggleIsLoading(true))
        let data: string = await profileAPI.getProfileStatus(userId)
        dispatch(setUserStatus(data));
    } catch (error) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
};

export const putUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ProfileActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: { resultCode: number; messages: string[] } = await profileAPI.putProfileStatus(status)
        if (data.resultCode === 0) {
            dispatch(putProfileStatus(status))
        } else {
            console.error("Ошибка обновления статуса:", data.messages[0]);
        }
    } catch (error) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch<ProfileActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let response = await profileAPI.putSavePhoto(file);
        dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (error) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}

type DispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>;

export const saveProfileThunkCreator =
    (id: number, photos: PhotosProfileType, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, aboutMe: string, contacts: ContactsProfileType) =>
        async (dispatch: DispatchType, getState: () => AppStateType) => {
            try {
                dispatch(toggleIsLoading(true))
                const userId = getState().user.userId;

                if (userId === null) {
                    throw new Error('userId is missing in state')
                }

                const profile = {id, photos, fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts};

                const response = await profileAPI.saveProfile(profile);

                if (response.resultCode === 0) {
                    await dispatch(setUserProfileThunkCreator(userId));
                } else {
                    dispatch(stopSubmit('edit-profile', {_error: response.messages[0] || 'Error'}));
                    throw new Error(response.messages[0] || 'Error');
                }
            } catch (error) {
                console.error('Ошибка сохранения профиля:', error);
            } finally {
                dispatch(toggleIsLoading(false))
            }
        };