import React from 'react';
import s from './MyPost.module.css'
import {MyPostProps} from "../MyPosts";

export const MyPost = ({id, text, likes, deletePost}: MyPostProps) => {
    return (
        <div className={s.post}>
            <p>{text}</p>
            <span>Likes: {likes}</span>
            <button onClick={() => deletePost(id)}>Delete Post</button>
        </div>
    );
};

