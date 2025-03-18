import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Button, Form, Input} from "antd";

const maxLength100 = maxLengthCreator(10)

const renderInput = ({input, meta}: any) => (
    <Form.Item
        validateStatus={meta.touched && meta.error ? "error" : ""}
        help={meta.touched && meta.error ? meta.error : ""}
    >
        <Input style={{width: '60%'}} {...input} placeholder="Write new message"/>
    </Form.Item>
);

export const AddMessageForm: React.FC<InjectedFormProps<{ post: string }>> = ({handleSubmit}) => {
    return (
        <Form onFinish={handleSubmit}>
            <Field name="post" component={renderInput} validate={[required, maxLength100]}/>
            <Button type="primary" onClick={handleSubmit}>
                Add Post
            </Button>
        </Form>
    );
};

export const AddMessageReduxForm = reduxForm<{ post: string }>({
    form: "addMessage",
})(AddMessageForm);