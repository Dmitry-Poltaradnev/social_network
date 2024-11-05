import React from 'react';
import {useDispatch} from "react-redux";
import {UserPropsType} from "./Users";
import {changeFollow} from "../../reducer/usersActions";

type UserType = {
    user: UserPropsType
}

export const User = ({user}: UserType) => {
    console.log(user)

    const dispatch = useDispatch();

    const changeFollowHandler = (id: string, followStatus: boolean) => {
        dispatch(changeFollow(id, followStatus))
    }

    return (
        <li >{user.fullName} , {user.status}
            <button onClick={() => changeFollowHandler(user.id, user.follow)}> Жмяк {user.follow}</button>
        </li>
    );
};

