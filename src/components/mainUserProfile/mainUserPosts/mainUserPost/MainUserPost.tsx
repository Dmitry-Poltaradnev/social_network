import React from 'react';
import s from './mainUserPost.module.css'
import {Button} from "antd";

export type MyPostType = {
    id: string,
    text: string,
    likes: number
    deletePost: (id: string) => void
}

export const MainUserPost = ({id, text, likes, deletePost}: MyPostType) => {
    return (
        <div className={s.post}>
            <p>{text}</p>
            <span style={{paddingRight: 10}}>Likes: {likes}</span>
            <Button type={'primary'} onClick={() => deletePost(id)}>Delete Post</Button>
        </div>
    );
};

