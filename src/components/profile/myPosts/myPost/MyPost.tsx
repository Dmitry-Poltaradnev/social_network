import React from 'react';
import s from './MyPost.module.css'
import {MyPostProps} from "../MyPosts";

export const MyPost = ({text, likes}: MyPostProps) => {
    return (
        <div className={s.post}>
            <p>{text}</p>
            <span>Likes: {likes}</span>
        </div>
    );
};

