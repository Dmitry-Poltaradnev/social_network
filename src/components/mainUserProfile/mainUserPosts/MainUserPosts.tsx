import React from 'react';
import {MainUserPost} from "./mainUserPost/MainUserPost";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../reducer/store";
import {addPost, deletePost} from "../../../reducer/postsActions";
import {AddPostForm} from "./AddPostForm";
import {reduxForm} from "redux-form";

export const MainUserPosts = () => {

    const dispatch = useDispatch()

    const post = useSelector((state: RootStateType) => state.post.myPosts);

    const deletePostHandler = (id: string) => {
        dispatch(deletePost(id))
    }

    let myPostsList = post.map((item) => <MainUserPost deletePost={deletePostHandler} key={item.id} id={item.id}
                                                       likes={item.likes} text={item.text}/>)

    const AddPostReduxForm = reduxForm({
        form: 'addPost'
    })(AddPostForm)

    const addNewPost = ({post}: any) => {
        if (post.trim().length > 0) {
            dispatch(addPost(post))
        }
    }

    return (
        <div className={'myPosts'}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div>
                {myPostsList}
            </div>
        </div>
    );
};

