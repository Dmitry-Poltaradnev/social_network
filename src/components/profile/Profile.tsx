import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = ({myPosts,addPost}:any) => {
    return (
        <div className={s.back}>
            <ProfileInfo/>
            <MyPosts addPost={addPost} myPosts={myPosts}/>
        </div>
    );
};

