import React, {useState} from 'react';
import {MyPost} from "./myPost/MyPost";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../reducer/store";
import {addPost, deletePost} from "../../../reducer/postsActions";

export const MyPosts = () => {

    const dispatch = useDispatch()

    const post = useSelector((state: RootStateType) => state.post.myPosts);

    const [inputState, setInputState] = useState('')

    const deletePostHandler = (id: string) => {
        dispatch(deletePost(id))
    }

    const addPostHandler = (inputState: string) => {
        if (inputState.trim().length > 0) {
            dispatch(addPost(inputState))
            setInputState('')
        }
    }

    let myPostsList = post.map((item) => <MyPost deletePost={deletePostHandler} key={item.id} id={item.id}
                                                 likes={item.likes} text={item.text}/>)

    return (
        <div className={'myPosts'}>
            <h3>My Posts</h3>
            <input value={inputState} onChange={event => setInputState(event.currentTarget.value)} type="text"/>
            <button onClick={() => addPostHandler(inputState)}>Add Post</button>
            <div>
                {myPostsList}
            </div>
        </div>
    );
};

