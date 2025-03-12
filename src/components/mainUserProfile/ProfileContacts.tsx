import React from 'react';
import s from './mainUserProfile.module.css'
import {ContactsProfileType, ProfileType} from "../../types/types";
import {Button} from "../common/Button";

type ProfileContactPropsType = {
    contacts: ContactsProfileType
    userId?: number
    toEditMode?: () => void
    user: ProfileType
}

export const ProfileContacts: React.FC<ProfileContactPropsType> = ({contacts, userId, toEditMode, user}) => {
    if (!contacts) {
        return <p>Loading...</p>;
    }

    return (
        <div className={s.profileContacts}>
            {userId && <div>
                <Button btnName={'Edit'} btnEffect={toEditMode || (() => {
                })}/>
            </div>}
            <p>About me: {user.aboutMe} </p>
            <p>Full name: {user.fullName}</p>
            <p>Free for work: {user.lookingForAJob ? 'yes' : 'no'} </p>
            <p>My skills: {user.lookingForAJobDescription}</p>
            <h3>Contacts</h3>
            <ul>
                {Object.entries(contacts).map(([key, value]) =>
                    <li key={key}><strong>{key}</strong>: {value || 'null'}</li>
                )}
            </ul>
        </div>
    );
};

