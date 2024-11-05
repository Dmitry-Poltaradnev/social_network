import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";

export type LocationType = {
    country: string
    city: string
}
export type UserPropsType = {
    id: string
    follow: boolean
    fullName: string
    status: string
    location: LocationType
}

export const Users = () => {

    const users = useSelector((state: RootStateType) => state.user.users)

    console.log(users)

    return (
        <div className='users-container'>
            <ul>
                {users.map((user: UserPropsType) => <User key={user.id} user={user}/>)}
            </ul>
        </div>
    );
};

