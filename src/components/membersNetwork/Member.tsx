import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import defaultUserPhoto from '../../img/default-avatar-profile.avif';
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../reducer/store";
import {changeUserFollowThunkCreator} from "../../reducer/userReducer";
import s from './memberProfile/memberProfile.module.css'
import {UserType} from "../../types/types";

export const FOLLOW_METHOD = {
    FOLLOW: 'post',
    UNFOLLOW: 'delete',
}

export const Member: React.FC<{ user: UserType }> = ({user}) => {

    const photoSrc = user.photos.small ?? user.photos.large ?? defaultUserPhoto;

    const dispatch = useDispatch();

    const handleFollowToggle = () => {
        const method = user.followed ? FOLLOW_METHOD.UNFOLLOW : FOLLOW_METHOD.FOLLOW
        dispatch(changeUserFollowThunkCreator(method, user.id, user.followed))
    }

    const {isFollowingInProgress} = useSelector((state: RootStateType) => state.user)

    const isDisabled = isFollowingInProgress.includes(user.id)

    return (
        <li className={s.memberProfile}>
            <NavLink to={'/profile/' + user.id}>
                <img className={s.memberPhoto} src={photoSrc} alt="user_photo"/>
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

