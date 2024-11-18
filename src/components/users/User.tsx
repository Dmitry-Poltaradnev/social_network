import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import defaultUserPhoto from '../../img/default-avatar-profile.avif';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";
import {changeFollow, setIsFollowing} from "../../reducer/usersActions";
import {RootStateType} from "../../reducer/store";

export const User = ({user}: any) => {

    const dispatch = useDispatch();

    const {isFollowingInProgress} = useSelector((state: RootStateType) => state.user)

    const isDisabled = isFollowingInProgress.includes(user.id)


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
            <button disabled={isDisabled}
                    onClick={() => {
                        dispatch(setIsFollowing(true, user.id))

                        const method = user.followed ? 'delete' : 'post';
                        userAPI.changeUserFollow(method, user.id).then((data) => {
                            if (data.resultCode === 0) {
                                changeFollowHandler(user.id, !user.followed);
                            }
                        }).catch((error: any) => {
                            console.error("Ошибка запроса:", error);
                        }).finally(() => {
                            dispatch(setIsFollowing(false, user.id))
                        })
                    }}>
                {user.followed ? "Unfollow" : "Follow"}
            </button>
        </li>
    );
};

