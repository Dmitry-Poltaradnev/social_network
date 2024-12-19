import {userAPI} from "../api/api";
import {
    changeFollow, putProfileSt, savePhotoSuccess,
    setIsFollowing,
    setProfile,
    setTotalCount,
    setUser,
    setUserStatus,
    toggleIsLoading
} from "./usersActions";
import {stopSubmit} from "redux-form";

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

export type InitUserStateType = {
    users: any;
};

const initUserState: any = {
    users: [],
    pageSize: 15,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
    user: {},
    isFollowingInProgress: [],
    newUserStatus: '',
    userId: null,
    photos: "",
}

export const userReducer = (state = initUserState, action: any) => {
    switch (action.type) {
        case  CHANGE_FOLLOW : {
            return {
                ...state,
                users: state.users.map((user: any) => user.id === action.payload.id ? {
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
                    state.isFollowingInProgress.filter((id: string) => id !== action.payload.userId)
            }
        }
        case SET_USERS : {
            return {...state, users: action.payload.users}
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

export const changeUserFollowThunkCreator = (method: string, userId: string, userFollowed: boolean) => async (dispatch: any) => {
    try {
        dispatch(setIsFollowing(true, userId))
        let data = await userAPI.changeUserFollow(method, userId)
        if (data.resultCode === 0) {
            dispatch(changeFollow(userId, !userFollowed));
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(setIsFollowing(false, userId))
    }
}

export const setUserProfileThunkCreator = (userId: string) => async (dispatch: any) => {
    try {
        let data = await userAPI.getProfile(userId)
        console.log(data)
        dispatch(setProfile(data))
        // !!!!!!!!--------------!!!!!!!!!
        if (data.photos) {
            console.log(data)
            dispatch(savePhotoSuccess(data.photos.large));
        }
        // !!!!!!!!--------------!!!!!!!!!
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
            dispatch(putProfileSt(status))
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

        console.log("Ответ от API:", data); // Добавьте этот лог для проверки
        console.log('Linka', data.data.data.photos.large)
        // !!!!!!!!--------------!!!!!!!!!
        dispatch(savePhotoSuccess(data.data.data.photos.large));

    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(toggleIsLoading(false))
    }
}
export const saveProfileThunkCreator = (fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, aboutMe: string, contacts: any) => async (dispatch: any, getState: any) => {
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






