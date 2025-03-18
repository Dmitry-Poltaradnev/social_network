import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Button, Input, Form} from "antd";

const maxLength10 = maxLengthCreator(10);

const renderInput = ({input, meta}: any) => (
    <Form.Item
        validateStatus={meta.touched && meta.error ? "error" : ""}
        help={meta.touched && meta.error ? meta.error : ""}
    >
        <Input {...input} placeholder="Write new post"/>
    </Form.Item>
);

const AddPostForm: React.FC<InjectedFormProps<{ post: string }>> = ({handleSubmit}) => {
    return (
        <Form onFinish={handleSubmit}>
            <Field name="post" component={renderInput} validate={[required, maxLength10]}/>
            <Button type="primary" onClick={handleSubmit}>
                Add Post
            </Button>
        </Form>
    );
};

export const AddPostReduxForm = reduxForm<{ post: string }>({
    form: "addPost",
})(AddPostForm);
