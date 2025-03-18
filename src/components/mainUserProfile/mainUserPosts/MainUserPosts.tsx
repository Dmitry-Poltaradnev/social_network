import React from 'react';
import {MainUserPost} from "./mainUserPost/MainUserPost";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../reducer/store";
import {addPost, deletePost} from "../../../reducer/postsActions";
import {AddPostReduxForm} from "./AddPostForm";
import s from '../mainUserPosts/mainUserPost/mainUserPost.module.css'

export const MainUserPosts = () => {

    const dispatch = useDispatch();

    const post = useSelector((state: RootStateType) => state.post.myPosts);

    const deletePostHandler = (id: string) => {
        dispatch(deletePost(id));
    }

    const myPostsList = post.map((item) => (
        <MainUserPost
            deletePost={deletePostHandler}
            key={item.id}
            id={item.id}
            likes={item.likes}
            text={item.text}
        />
    ));

    const addNewPost = (formData: any, reset: () => void) => {
        if (formData.post.trim().length > 0) {
            dispatch(addPost(formData.post));
            reset();
        }
    };

    return (
        <div className={s.myPosts}>
            <h3 className={s.postTitle}>My Posts :</h3>
            <AddPostReduxForm
                onSubmit={(formData: any, dispatch: any, props: any) => addNewPost(formData, props.reset)}/>
            <div>
                {myPostsList}
            </div>
        </div>
    );
};
