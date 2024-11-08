import React from 'react';
import {useDispatch} from "react-redux";
// import {UserPropsType} from "./Users";
import {changeFollow} from "../../reducer/usersActions";

import defaultUserPhoto from '../../img/default-avatar-profile.avif';

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
            <img style={{maxWidth: '100px', maxHeight: '100px'}} src={user.photos && (user.photos.small || user.photos.large) ?  (user.photos.small || user.photos.large) : defaultUserPhoto} alt="user_photo"/>
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

