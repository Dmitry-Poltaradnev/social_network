import React from 'react';
import {MyPost} from "./myPost/MyPost";

export const MyPosts = () => {
    return (
        <div className={'myPosts'}>
            <h3>My Posts</h3>
            <input type="text"/>
            <button>Add Post</button>
            <MyPost text={'lorem ipsum'}/>
            <MyPost text={'lorem ipsum23'}/>
            <MyPost text={'lorem ipsum4343'}/>
        </div>
    );
};

