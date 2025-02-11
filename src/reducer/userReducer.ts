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

type UserActions =
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
        lookingForAJob: false,
        name: '',
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

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: any = await userAPI.getUser(currentPage, pageSize)
        dispatch(setTotalCount(data.totalCount))
        dispatch(setUser(data.items))
    } catch (error) {
        console.log("Didn't get users", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}

export const changeUserFollowThunkCreator = (method: string, userId: number, userFollowed: boolean) => async (dispatch: any) => {
    try {
        const numericUserId = Number(userId);
        dispatch(setIsFollowing(true, numericUserId));
        let data = await userAPI.changeUserFollow(method, userId)
        if (data.resultCode === 0) {
            dispatch(changeFollow(userId, !userFollowed));
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(setIsFollowing(false, Number(userId)))
    }
}

export const setUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    try {
        let data = await userAPI.getProfile(userId)
        dispatch(setProfile(data))
        if (data.photos) {
            dispatch(savePhotoSuccess(data.photos.large));
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    }
}

export const setUserStatusThunkCreator = () => async (dispatch: any, getState: any) => {
    try {
        const userId = getState().user.userId; // Получаем userId из состояния
        if (!userId) {
            console.error("userId отсутствует в состоянии");
            return;
        }
        dispatch(toggleIsLoading(true))
        let data = await userAPI.getProfileStatus(userId)
        dispatch(setUserStatus(data));
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
};

export const putUserStatusThunkCreator = (status: string) => async (dispatch: any) => {
    try {
        dispatch(toggleIsLoading(true))
        let data = await userAPI.putProfileStatus(status)
        if (data.resultCode === 0) {
            dispatch(putProfileStatus(status))
        } else {
            console.error("Ошибка обновления статуса:", data.messages[0]);
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    try {
        dispatch(toggleIsLoading(true))
        let data: any = await userAPI.putSavePhoto(file)
        dispatch(savePhotoSuccess(data.data.data.photos.large));

    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}
export const saveProfileThunkCreator = (fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, aboutMe: string, contacts: ContactsUserType) => async (dispatch: any, getState: any) => {
    try {
        dispatch(toggleIsLoading(true))
        const userId = getState().user.userId;
        const profile = {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts};
        const response = await userAPI.saveProfile(profile);

        if (response.data.resultCode === 0) {
            dispatch(setUserProfileThunkCreator(userId));
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






