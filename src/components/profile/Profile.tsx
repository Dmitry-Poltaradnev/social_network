import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {setProfile} from "../../reducer/usersActions";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {useParams} from "react-router-dom";
import { userAPI} from "../../api/api";

export const Profile = () => {

    const {userId} = useParams<{ userId: string }>();

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.user);

    useEffect(() => {
        userAPI.getProfile(userId).then((response) => {
            dispatch(setProfile(response))
        })
    }, [])

    return (
        <div className={s.back}>
            <ProfileInfo user={user}/>
            <MyPosts/>
        </div>
    );
};

