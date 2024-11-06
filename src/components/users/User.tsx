import React from 'react';
import {useDispatch} from "react-redux";
// import {UserPropsType} from "./Users";
import {changeFollow} from "../../reducer/usersActions";

// type UserType = {
//     user: UserPropsType
// }

export const User = ({user}: any) => {

    const dispatch = useDispatch();

    const changeFollowHandler = (id: string, followStatus: boolean) => {
        dispatch(changeFollow(id, followStatus))
    }

    return (
        <li>
            <span> Name: {user.name}</span>
            <br/>
            {/*<span>Status: {user.status}</span>*/}
            {/*<br/>*/}
            {/*<span>Country: {user.location.country} , City: {user.location.city}</span>*/}
            {/*<br/>*/}
            <button
                onClick={() => changeFollowHandler(user.id, user.followed)}>{user.followed ? "follow" : "don't unfollow"}</button>
        </li>
    );
};

