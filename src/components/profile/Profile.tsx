import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={s.back}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};

