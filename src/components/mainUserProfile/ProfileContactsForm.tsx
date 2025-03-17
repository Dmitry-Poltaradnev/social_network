import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Button, Checkbox, Form, Input} from 'antd';
import {required} from '../../utils/validators';

type ProfileContactsFormProps = {
    contacts: any;
};

const renderInput = ({input, meta, label, ...rest}: any) => (
    <Form.Item
        label={label}
        validateStatus={meta.touched && meta.error ? 'error' : ''}
        help={meta.touched && meta.error ? meta.error : ''}
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
    >
        <Input {...input} {...rest} />
    </Form.Item>
);

const renderCheckbox = ({input}: any) => (
    <Form.Item>
        <Checkbox checked={input.value} onChange={input.onChange}>
            Free for work
        </Checkbox>
    </Form.Item>
);

const ProfileContactsForm: React.FC<InjectedFormProps<{}, ProfileContactsFormProps> & ProfileContactsFormProps> = ({
                                                                                                                       contacts,
                                                                                                                       handleSubmit,
                                                                                                                   }) => {
    return (
        <Form style={{maxWidth: 600}} onFinish={handleSubmit}>
            <Form.Item>
                <Button type="primary" onClick={handleSubmit} htmlType="submit">
                    Save
                </Button>
            </Form.Item>

            <Field name="aboutMe" component={renderInput} placeholder="About me"
                   validate={[required]} label="About me:"/>
            <Field name="fullName" component={renderInput} placeholder="Full name" validate={[required]}
                   label="Full name:"/>
            <Field name="lookingForAJobDescription" component={renderInput} placeholder="My skills"
                   validate={[required]} label="My skills:"/>
            <Field name="lookingForAJob" component={renderCheckbox}/>

            <h3>Contacts :</h3>
            <ul style={{listStyle: 'none'}}>
                {Object.entries(contacts).map(([key, value]: any) => (
                    <li key={key}>
                        <Field name={`contacts.${key}`} component={renderInput} placeholder={key} value={value}/>
                    </li>
                ))}
            </ul>
        </Form>
    );
};

const ProfileContactsReduxForm = reduxForm<{}, ProfileContactsFormProps>({
    form: 'edit-profile',
})(ProfileContactsForm);

export default ProfileContactsReduxForm;
