import React from 'react';
import s from './mainUserPost.module.css'
import {Button} from "../../../common/Button";

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
            <span>Likes: {likes}</span>
            <Button btnName={'Delete Post'} btnEffect={() => deletePost(id)} />
        </div>
    );
};

