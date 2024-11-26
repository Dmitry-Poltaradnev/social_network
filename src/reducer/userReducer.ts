import {userAPI} from "../api/api";
import {
    changeFollow, putProfileSt,
    setIsFollowing,
    setProfile,
    setTotalCount,
    setUser,
    setUserStatus,
    toggleIsLoading
} from "./usersActions";

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
}

export const userReducer = (state = initUserState, action: any) => {
    switch (action.type) {
        case  'CHANGE-FOLLOW' : {
            return {
                ...state,
                users: state.users.map((user: any) => user.id === action.payload.id ? {
                    ...user,
                    followed: action.payload.followStatus
                } : user)
            }
        }
        case  'IS_FOLLOWING' : {
            return {
                ...state,
                isFollowingInProgress: action.payload.isFollowing ?
                    [...state.isFollowingInProgress, action.payload.userId] :
                    state.isFollowingInProgress.filter((id: string) => id !== action.payload.userId)
            }
        }
        case 'SET_USERS' : {
            return {...state, users: action.payload.users}
        }
        case 'SET_TOTAL_COUNT' : {
            return {...state, totalCount: action.payload.totalCount}
        }
        case 'SET_CURRENT_PAGE' : {
            return {...state, currentPage: action.payload.currentPage}
        }
        case 'IS_LOADING' : {
            return {...state, isLoading: action.payload.isLoading}
        }
        case 'SET_USER_PROFILE' : {
            return {...state, user: action.payload.user}
        }
        case 'GET_USER_STATUS' : {
            return {...state, newUserStatus: action.payload.status}
        }
        case 'PUT_USER_STATUS' : {
            return {...state, newUserStatus: action.payload.status}
        }
        case 'GET_USER_ID' : {
            return {...state, userId: action.payload.userId}
        }
        default :
            return state
    }
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsLoading(true))
        userAPI.getUser(currentPage, pageSize).then((data: any) => {
            dispatch(setTotalCount(data.totalCount))
            dispatch(setUser(data.items))
        }).finally(() => {
            dispatch(toggleIsLoading(false))
        })
    }
}

export const changeUserFollowThunkCreator = (method: string, userId: string, userFollowed: boolean) => {
    return (dispatch: any) => {
        dispatch(setIsFollowing(true, userId))
        userAPI.changeUserFollow(method, userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(changeFollow(userId, !userFollowed));
            }
        }).catch((error: any) => {
            console.error("Ошибка запроса:", error);
        }).finally(() => {
            dispatch(setIsFollowing(false, userId))
        })
    }
}

export const setUserProfileThunkCreator = (userId: string) => {
    return (dispatch: any) => {
        userAPI.getProfile(userId).then((response) => {
            dispatch(setProfile(response))
        })
    }
}

export const setUserStatusThunkCreator = () => {
    return (dispatch: any, getState: any) => {
        const userId = getState().user.userId; // Получаем userId из состояния
        if (!userId) {
            console.error("userId отсутствует в состоянии");
            return;
        }
        dispatch(toggleIsLoading(true))
        userAPI.getProfileStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        }).catch((error: any) => {
            console.error("Ошибка запроса:", error);
        }).finally(() => {
            dispatch(toggleIsLoading(false))
        })
    };
};

export const putUserStatusThunkCreator = (status: string) => {
    return (dispatch: any) => {
        dispatch(toggleIsLoading(true))
        userAPI.putProfileStatus(status).then(() => {
            dispatch(putProfileSt(status))
        }).catch((error: any) => {
            console.error("Ошибка запроса:", error);
        }).finally(() => {
            dispatch(toggleIsLoading(false))
        })
    }
}

