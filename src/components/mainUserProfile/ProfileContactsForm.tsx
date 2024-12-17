import React from 'react';
import s from './mainUserProfile.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";

type ProfileContactsFormProps = {
    contacts: any;
    user: any;
};

const ProfileContactsForm: React.FC<InjectedFormProps<{}, ProfileContactsFormProps> & ProfileContactsFormProps> = ({
                                                                                                                       contacts,
                                                                                                                       user,
                                                                                                                       handleSubmit
                                                                                                                   }: any) => {
    return (
        <form className={s.profileContacts} onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <h3>Edit Contacts</h3>
            <div><p>Full name: {user.fullName}</p>
                <Field placeholder={'change name'} name={'fullName'} component={Input} type="text"
                       validate={[required]}/>
            </div>
            <div>
                <p>My professional skills: {user.lookingForAJobDescription}</p>
                <Field name={'lookingForAJobDescription'} component={Input} type="checkbox"/>
            </div>
            <div>
                <p>About me: {user.aboutMe}</p>
                <Field placeholder={'about me'} name={'aboutMe'} component={Input} type="text"
                       validate={[required]}/>
            </div>
            <ul>
                {Object.entries(contacts).map(([key, value]: any) =>
                    <li key={key}><strong>{key}</strong>: {value}</li>
                )}
            </ul>
        </form>
    );
};

const ProfileContactsReduxForm = reduxForm<{}, ProfileContactsFormProps>({
    form: 'edit-profile',
})(ProfileContactsForm)

export default ProfileContactsReduxForm