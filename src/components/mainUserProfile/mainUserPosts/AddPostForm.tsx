import React from 'react';
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Input} from "../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

export const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'write new post'} type="text" component={Input} name={'post'}
                   validate={[required, maxLength10]}/>
            <button>Add Post</button>
        </form>
    );
};

