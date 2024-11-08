import {v1} from "uuid";
import {setTotalCount} from "./usersActions";
// import {UserPropsType} from "../components/users/Users";

export type InitUserStateType = {
    users: any;
};

const initUserState: any = {
    users: [
        // {
        //     id: v1(),
        //     follow: true,
        //     fullName: 'Petra',
        //     status: "I'm Sex Machine",
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
        // {
        //     id: v1(),
        //     follow: false,
        //     fullName: 'Vasa',
        //     status: "I'm Sex Machine",
        //     location: {country: 'Russia', city: 'Moscow'}
        // },
        // {
        //     id: v1(),
        //     follow: true,
        //     fullName: 'Dimon',
        //     status: "I'm Sex Machine",
        //     location: {country: 'Germany', city: 'Berlin'}
        // },
        // {
        //     id: v1(),
        //     follow: true,
        //     fullName: 'Katsiarina',
        //     status: "I'm Sex Machine",
        //     location: {country: 'Georgia', city: 'Tbilisi'}
        // },
    ],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
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
        default :
            return state
    }
};