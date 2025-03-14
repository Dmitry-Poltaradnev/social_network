import React from 'react';
import s from './mainUserProfile.module.css'
import {ContactsProfileType, ProfileType} from "../../types/types";
import {Button} from "antd";

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
                <Button type={"primary"} onClick={toEditMode || (() => {
                })}>Edit</Button>
            </div>}
            <ul style={{listStyleType: 'none', padding: 10}}>
                <li>About me : {user.aboutMe}</li>
                <li>Name : {user.fullName}</li>
                <li>Free for work : {user.lookingForAJob ? 'yes' : 'no'}</li>
                <li>My skills : {user.lookingForAJobDescription}</li>
            </ul>
            <h3>Contacts</h3>
            <ul>
                {Object.entries(contacts).map(([key, value]) =>
                    <li key={key}><strong>{key}</strong>: {value || 'null'}</li>
                )}
            </ul>
        </div>
    );
};

