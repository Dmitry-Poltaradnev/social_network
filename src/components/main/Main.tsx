import React from 'react';
import s from './Main.module.css';
import {MyPosts} from "./posts/MyPosts";

export const Main = (props: any) => {
    const {posts} = props;
    return (
        <div className={s.main}>
            Main
            <MyPosts posts={posts}/>
        </div>
    );
};

