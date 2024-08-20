import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = ({myPosts}:any) => {
    return (
        <div className={s.back}>
            <ProfileInfo/>
            <MyPosts myPosts={myPosts}/>
        </div>
    );
};

