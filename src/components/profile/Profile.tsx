import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {useParams} from "react-router-dom";
import {setUserProfileThunkCreator} from "../../reducer/userReducer";

export const Profile = () => {

    const {userId} = useParams<{ userId: string }>();

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.user);

    useEffect(() => {
        dispatch(setUserProfileThunkCreator(userId));
    }, []);

    return (
        <div className={s.back}>
            <ProfileInfo user={user}/>
            <MyPosts/>
        </div>
    );
};

