import React from 'react';
import {Field} from "redux-form";

export const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'write new post'} type="text" component={'input'} name={'post'}/>
            <button>Add Post</button>
        </form>
    );
};

