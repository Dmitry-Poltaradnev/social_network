import React from "react";

export type InitUserStateType = {
    users: any;
};

const initUserState: any = {
    users: [],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
    user: {}
}

export const userReducer = (state = initUserState, action: any) => {
    switch (action.type) {
        case  'CHANGE-FOLLOW' : {
            return {
                ...state,
                users: state.users.map((user: any) => user.id === action.payload.id ? {
                    ...user,
                    followed: !action.payload.followStatus
                } : user)
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
        default :
            return state
    }
};