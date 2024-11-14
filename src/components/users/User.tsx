import React from 'react';
import {useDispatch} from "react-redux";
import {changeFollow} from "../../reducer/usersActions";
import defaultUserPhoto from '../../img/default-avatar-profile.avif';
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                        withCredentials: true, headers: {'API-KEY': '0570d7e8-028b-4976-ac64-ded2181cd92b'}
                    }).then((response) => {
                            console.log(response.data)
                            if (response.data.resultCode === 0) {
                                // need fix!!!
                                changeFollowHandler(user.id, true)
                            }
                        }
                    )

                    // changeFollowHandler(user.id, !user.followed)
                }}>{user.followed ? "follow" : "unfollow"}</button>
        </li>
    );
};

