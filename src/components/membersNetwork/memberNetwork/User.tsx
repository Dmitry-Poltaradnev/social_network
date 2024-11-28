import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import defaultUserPhoto from '../../../img/default-avatar-profile.avif';
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../../reducer/store";
import {changeUserFollowThunkCreator} from "../../../reducer/userReducer";

export const FOLLOW_METHOD = {
    FOLLOW: 'post',
    UNFOLLOW: 'delete',
}

export const User = ({user}: any) => {

    const dispatch = useDispatch();

    const handleFollowToggle = () => {
        const method = user.followed ? FOLLOW_METHOD.UNFOLLOW : FOLLOW_METHOD.FOLLOW
        dispatch(changeUserFollowThunkCreator(method, user.id, user.followed))
    }

    const {isFollowingInProgress} = useSelector((state: RootStateType) => state.user)

    const isDisabled = isFollowingInProgress.includes(user.id)

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
            <button disabled={isDisabled} onClick={handleFollowToggle}>
                {user.followed ? "Unfollow" : "Follow"}
            </button>
        </li>
    );
};

