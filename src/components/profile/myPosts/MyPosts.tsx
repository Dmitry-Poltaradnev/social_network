import React, {useState} from 'react';
import {MyPost} from "./myPost/MyPost";

export type MyPostProps = {
    id: string
    text: string
    likes: number
    deletePost: (id: string) => void
}

export type MyPostsProps = {
    myPosts: MyPostProps[];
    addPost: (text: string) => void
    deletePost: (id: string) => void
}

export const MyPosts = ({myPosts, addPost, deletePost}: MyPostsProps) => {

    const [inputState, setInputState] = useState('')

    let myPostsList = myPosts.map((item) => <MyPost deletePost={deletePost} key={item.id} id={item.id} likes={item.likes} text={item.text}/>)

    return (
        <div className={'myPosts'}>
            <h3>My Posts</h3>
            <input value={inputState} onChange={event => setInputState(event.currentTarget.value)} type="text"/>
            <button onClick={() => addPost(inputState)}>Add Post</button>
            <div>
                {myPostsList}
            </div>
        </div>
    );
};

