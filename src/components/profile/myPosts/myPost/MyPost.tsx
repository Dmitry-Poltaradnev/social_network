import React from 'react';
import s from './MyPost.module.css'

export type MyPostType = {
    id: string,
    text: string,
    likes: number
    deletePost: (id: string) => void
}

export const MyPost = ({id, text, likes, deletePost}: MyPostType) => {
    return (
        <div className={s.post}>
            <p>{text}</p>
            <span>Likes: {likes}</span>
            <button onClick={() => deletePost(id)}>Delete Post</button>
        </div>
    );
};

