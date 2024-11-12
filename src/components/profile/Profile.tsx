import React, {useEffect} from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {setProfile, setTotalCount, setUser, toggleIsLoading} from "../../reducer/usersActions";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";

export const Profile = () => {

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.user);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`).then((response) => {
            dispatch(setProfile(response.data))
            console.log(response.data)
        })
    }, [])

    return (
        <div className={s.back}>
            <ProfileInfo user={user}/>
            <MyPosts />
        </div>
    );
};

