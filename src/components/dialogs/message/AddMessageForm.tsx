import React from 'react';
import {Field} from "redux-form";

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" name={'message'} placeholder={'Enter your message'} component={'textarea'} />
            <br/>
            <button>Send message</button>
        </form>
    );
};

