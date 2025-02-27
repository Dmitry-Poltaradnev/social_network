import {
    changeFollow,
    ChangeFollowType,
    GetUserIdType,
    SetCurrentPageType,
    setIsFollowing,
    SetIsFollowingType,
    setTotalCount,
    SetTotalCountType,
    setUser,
    SetUsersType,
    toggleIsLoading,
    ToggleIsLoadingType
} from "./usersActions";
import {UserType,} from "../types/types";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

export const CHANGE_FOLLOW = 'CHANGE_FOLLOW'
export const IS_FOLLOWING = 'IS_FOLLOWING'
export const SET_USERS = 'SET_USERS'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const IS_LOADING = 'IS_LOADING'
export const GET_USER_ID = 'GET_USER_ID'

export type UserActions =
    ChangeFollowType
    | SetIsFollowingType
    | SetTotalCountType
    | SetCurrentPageType
    | ToggleIsLoadingType
    | GetUserIdType
    | SetUsersType


const initialState = {
    users: [] as UserType[],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isLoading: false,
    isFollowingInProgress: [] as Array<number>,
    userId: null as number | null,
};

type InitUserStateType = typeof initialState;

export const userReducer = (state: InitUserStateType = initialState, action: UserActions): InitUserStateType => {
    switch (action.type) {
        case  CHANGE_FOLLOW : {
            return {
                ...state,
                users: state.users.map((user: UserType) => user.id === Number(action.payload.id) ? {
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
        case GET_USER_ID : {
            return {...state, userId: action.payload.userId}
        }
        default :
            return state
    }
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch(toggleIsLoading(true))
        let data = await usersAPI.getUser(currentPage, pageSize)
        dispatch(setTotalCount(data.totalCount))
        dispatch(setUser(data.items));
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
        let data: { resultCode: number } = await usersAPI.changeUserFollow(method, userId)
        if (data.resultCode === 0) {
            dispatch(changeFollow(userId, !userFollowed));
        }
    } catch (error: any) {
        console.error("Ошибка запроса:", error);
    } finally {
        dispatch(setIsFollowing(false, Number(userId)))
    }
}








