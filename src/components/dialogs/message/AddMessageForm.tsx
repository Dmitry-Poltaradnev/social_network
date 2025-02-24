import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/formsControls/FormsControls";

type AddMessageFormValues = {
    message: string
}

const maxLength100 = maxLengthCreator(10)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValues>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'text'} placeholder={'Enter your message'} component={TextArea}
                   validate={[required, maxLength100]}/>
            <br/>
            <button>Send message</button>
        </form>
    );
};

