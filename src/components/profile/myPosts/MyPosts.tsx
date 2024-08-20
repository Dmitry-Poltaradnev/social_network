import React from 'react';
import {MyPost} from "./myPost/MyPost";

export type MyPostProps = {
    id: string
    text: string
    likes: number
}

type MyPostsProps = {
    myPosts: MyPostProps[];
}

export const MyPosts = ({myPosts}: MyPostsProps) => {
    return (
        <div className={'myPosts'}>
            <h3>My Posts</h3>
            <input type="text"/>
            <button>Add Post</button>
            <div>
                {myPosts.map((item) => <MyPost key={item.id} id={item.id} likes={item.likes} text={item.text}/>)}
            </div>
        </div>
    );
};

