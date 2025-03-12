import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/formsControls/FormsControls";
import {Button} from "../../common/Button";

const maxLength100 = maxLengthCreator(10)

export const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'text'} placeholder={'Enter your message'} component={TextArea}
                   validate={[required, maxLength100]}/>
            <br/>
            <Button btnName={'Send message'} btnEffect={props.handleSubmit}/>
        </form>
    );
};

