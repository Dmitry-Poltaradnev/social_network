import React from 'react';
import {useDispatch} from "react-redux";
// import {UserPropsType} from "./Users";
import {changeFollow} from "../../reducer/usersActions";

import defaultUserPhoto from '../../img/default-avatar-profile.avif';
import {NavLink} from "react-router-dom";

// type UserType = {
//     user: UserPropsType
// }

export const User = ({user}: any) => {

    const dispatch = useDispatch();

    const changeFollowHandler = (id: string, followStatus: boolean) => {
        dispatch(changeFollow(id, followStatus))
    }

    return (
        <li style={{margin: '20px'}}>
            <NavLink to={'/profile/' + user.id}>
                <img style={{maxWidth: '100px', maxHeight: '100px'}}
                     src={user.photos && (user.photos.small || user.photos.large) ? (user.photos.small || user.photos.large) : defaultUserPhoto}
                     alt="user_photo"/>
            </NavLink>
            <br/>
            <span> Name: {user.name}</span>
            <br/>
            <button
                onClick={() => changeFollowHandler(user.id, user.followed)}>{user.followed ? "follow" : "unfollow"}</button>
        </li>
    );
};

