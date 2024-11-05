import {v1} from "uuid";


const initUserState = {
    users: [
        {
            id: v1(),
            follow: true,
            fullName: 'Petra',
            status: "I'm Sex Machine",
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: v1(),
            follow: false,
            fullName: 'Vasa',
            status: "I'm Sex Machine",
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: v1(),
            follow: false,
            fullName: 'Dimon',
            status: "I'm Sex Machine",
            location: {country: 'Germany', city: 'Berlin'}
        },
        {
            id: v1(),
            follow: true,
            fullName: 'Katsiarina',
            status: "I'm Sex Machine",
            location: {country: 'Georgia', city: 'Tbilisi'}
        },
    ]
}

export const userReducer = (state = initUserState, action: any) => {
    switch (action.type) {
        case  'CHANGE-FOLLOW' : {
            return {...state,
                users: state.users.map(user => user.id === action.payload.id ? {
                    ...user,
                    follow: !action.payload.followStatus
                } : user)
            }
        }
        default :
            return state
    }
};