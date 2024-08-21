import React, {useState} from 'react';
import {MyPost} from "./myPost/MyPost";

export type MyPostProps = {
    id: string
    text: string
    likes: number
}

export type MyPostsProps = {
    myPosts: MyPostProps[];
    addPost: (title: string) => void
}

export const MyPosts = ({myPosts, addPost}: MyPostsProps) => {

    const [inputState, setInputState] = useState('')

    console.log(inputState)

    let myPostsList = myPosts.map((item) => <MyPost key={item.id} id={item.id} likes={item.likes} text={item.text}/>)

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

