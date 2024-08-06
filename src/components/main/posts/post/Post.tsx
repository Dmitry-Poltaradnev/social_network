import React from 'react';
import s from './Post.module.css'

export const Post = ({post}: any) => {
    const {text,likes} = post
    return (
        <div>
           <p>{text}</p>
            <span>{likes}</span>
        </div>
    );
};

