import React from 'react';
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/formsControls/FormsControls";

const maxLength100 = maxLengthCreator(10)

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} placeholder={'Enter your message'} component={TextArea}
                   validate={[required, maxLength100]}/>
            <br/>
            <button>Send message</button>
        </form>
    );
};

