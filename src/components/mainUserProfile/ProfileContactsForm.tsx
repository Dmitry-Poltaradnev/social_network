import React from 'react';
import s from './mainUserProfile.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators";
import {Button} from "../common/Button";

type ProfileContactsFormProps = {
    contacts: any;
};

const ProfileContactsForm: React.FC<InjectedFormProps<{}, ProfileContactsFormProps> & ProfileContactsFormProps> = ({
                                                                                                                       contacts,
                                                                                                                       handleSubmit
                                                                                                                   }: any) => {


    return (
        <form className={s.profileContacts} onSubmit={handleSubmit}>
            <Button btnName={'Save'} btnEffect={handleSubmit}/>
            <h3>Edit Contacts</h3>

            <span>About me : </span>
            <Field placeholder={'about'} name={'aboutMe'} component={Input} type="text"
            />

            <span>Name : </span>
            <Field placeholder={'change name'} name={'fullName'} component={Input} type="text"
                   validate={[required]}/>

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <p>Free for a work :</p>
                <Field name={'lookingForAJob'} component={Input} type="checkbox"/>
            </div>


            <span>My skills :</span>
            <Field placeholder={'my skills'} name={'lookingForAJobDescription'} component={Input} type="text"
                   validate={[required]}/>
            <ul>
                {Object.entries(contacts).map(([key, value]: any) =>
                    <li key={key}>{key} :<Field placeholder={key} name={`contacts.${key}`}
                                                component={Input} type="text"/></li>
                )}
            </ul>
        </form>
    );
};

const ProfileContactsReduxForm = reduxForm<{}, ProfileContactsFormProps>({
    form: 'edit-profile',
})(ProfileContactsForm)

export default ProfileContactsReduxForm