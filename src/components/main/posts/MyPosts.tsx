import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./post/Post";

export const MyPosts = (props : any) => {
    const {posts} = props;
    return (
        <div className={s.posts}>
            <ul>
                <ul>
                    {posts.map((post: any) => <Post key={post.id} post={post}/>)}
                </ul>
            </ul>
        </div>
    );
};

