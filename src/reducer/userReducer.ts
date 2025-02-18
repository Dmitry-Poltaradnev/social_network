import {userAPI} from "../api/api";
import {
    changeFollow,
    ChangeFollowType,
    GetUserIdType,
    putProfileStatus,
    PutProfileStatusType,
    savePhotoSuccess, SavePhotoSuccessType,
    SetCurrentPageType,
    setIsFollowing,
    SetIsFollowingType,
    setProfile, SetProfileType,
    setTotalCount,
    SetTotalCountType,
    setUser,
    setUserStatus,
    SetUserStatusType,
    SetUsersType,
    toggleIsLoading,
    ToggleIsLoadingType
} from "./usersActions";
import {stopSubmit} from "redux-form";
import {ContactsUserType, PhotosUserType, UsersType, UserType} from "../types/types";
import {AnyAction, Dispatch} from "redux";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export const CHANGE_FOLLOW = 'CHANGE_FOLLOW'
export const IS_FOLLOWING = 'IS_FOLLOWING'
export const SET_USERS = 'SET_USERS'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const IS_LOADING = 'IS_LOADING'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const GET_USER_STATUS = 'GET_USER_STATUS'
export const PUT_USER_STATUS = 'PUT_USER_STATUS'
export const GET_USER_ID = 'GET_USER_ID'
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type UserActions =
    ChangeFollowType
    | SetIsFollowingType
    | SetTotalCountType
    | SetCurrentPageType
    | ToggleIsLoadingType
    | SetUserStatusType
    | PutProfileStatusType
    | GetUserIdType
    | SavePhotoSuccessType
    | SetProfileType
    | SetUsersType


type InitUserStateType = {
    users: UsersType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isLoading: boolean,
    user: UserType,
    isFollowingInProgress: number[],
    newUserStatus: string,
    userId: number | null,
    photos: PhotosUserType | null
}

const initialState: InitUserStateType = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isLoading: false,
    user: {
        id: 0,
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        aboutMe: '',
        photos: {small: null, large: null},
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
    },
    isFollowingInProgress: [],
    newUserStatus: '',
    userId: null,
    photos: {small: null, large: null},
};

export const userReducer = (state = initialState, action: UserActions): InitUserStateType => {
    switch (action.type) {
        case  CHANGE_FOLLOW : {
            return {
                ...state,
                users: state.users.map((user: UsersType) => user.id === Number(action.payload.id) ? {
                    ...user,
                    followed: action.payload.followStatus
                } : user)
            }
        }
        case  IS_FOLLOWING : {
            return {
                ...state,
                isFollowingInProgress: action.payload.isFollowing ?
                    [...state.isFollowingInProgress, action.payload.userId] :
                    state.isFollowingInProgress.filter((id: number) => id !== action.payload.userId)
            }
        }
        case SET_USERS : {
            return {
                ...state,
                users: Array.isArray(action.payload.users) ? action.payload.users : [action.payload.users]
            };
        }
        case SET_TOTAL_COUNT : {
            return {...state, totalCount: action.payload.totalCount}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.payload.currentPage}
        }
        case IS_LOADING : {
            return {...state, isLoading: action.payload.isLoading}
        }
        case SET_USER_PROFILE : {
            return {...state, user: action.payload.user}
        }
        case GET_USER_STATUS : {
            return {...state, newUserStatus: action.payload.status}
        }
        case PUT_USER_STATUS : {
            return {...state, newUserStatus: action.payload.status}
        }
        case GET_USER_ID : {
            return {...state, userId: action.payload.userId}
        }
        case SAVE_PHOTO_SUCCESS : {
            return {...state, photos: action.payload.photos}
        }
        default :
            return state
    }
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: { totalCount: number; items: UsersType } = await userAPI.getUser(currentPage, pageSize)
        dispatch(setTotalCount(data.totalCount))
        dispatch(setUser(data.items))
    } catch (error) {
        console.log("Didn't get users", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}

export const changeUserFollowThunkCreator = (method: string, userId: number, userFollowed: boolean) => async (dispatch: Dispatch<UserActions>) => {
    try {
        const numericUserId = Number(userId);
        dispatch(setIsFollowing(true, numericUserId));
        let data: { resultCode: number } = await userAPI.changeUserFollow(method, userId)
        if (data.resultCode === 0) {
            dispatch(changeFollow(userId, !userFollowed));
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(setIsFollowing(false, Number(userId)))
    }
}

export const setUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<UserActions>) => {
    try {
        let data: UserType = await userAPI.getProfile(userId)
        dispatch(setProfile(data))
        if (data.photos) {
            dispatch(savePhotoSuccess(data.photos));
        }
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
}

export const setUserStatusThunkCreator = () => async (dispatch: Dispatch<UserActions>, getState: () => AppStateType) => {
    try {
        const userId = getState().user.userId; // Получаем userId из состояния
        if (!userId) {
            console.error("userId отсутствует в состоянии");
            return;
        }
        dispatch(toggleIsLoading(true))
        let data: string = await userAPI.getProfileStatus(userId)
        dispatch(setUserStatus(data));
    } catch (error) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
};

export const putUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: { resultCode: number; messages: string[] } = await userAPI.putProfileStatus(status)
        console.log(data)
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
export const savePhoto = (file: File) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: { data: { photos: PhotosUserType } } = await userAPI.putSavePhoto(file)
        dispatch(savePhotoSuccess(data.data.photos));
    } catch (error) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}

type DispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>;

export const saveProfileThunkCreator =
    (fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, aboutMe: string, contacts: ContactsUserType) =>
        async (dispatch: DispatchType, getState: () => AppStateType) => {
            try {
                dispatch(toggleIsLoading(true))
                const userId = getState().user.userId;

                if (userId === null) {
                    throw new Error('userId is missing in state')
                }

                const profile = {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts};
                const response: {
                    data: { resultCode: number; messages: string[] }
                } = await userAPI.saveProfile(profile);

                if (response.data.resultCode === 0) {
                    await dispatch(setUserProfileThunkCreator(userId));
                } else {
                    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0] || 'Error'}));
                    throw new Error(response.data.messages[0] || 'Error');
                }
            } catch (error) {
                console.error('Ошибка сохранения профиля:', error);
            } finally {
                dispatch(toggleIsLoading(false))
            }
        };






