import React from 'react';
import s from './mainUserProfile.module.css'

export const ProfileContacts = ({contacts, userId, toEditMode, user}: any) => {
    if (!contacts) {
        return <p>No contacts available</p>
    }
    return (
        <div className={s.profileContacts}>
            {userId && <div>
                <button onClick={toEditMode}>edit</button>
            </div>}
            <p>Name: {user.fullName}</p>
            <p>Description: {user.lookingForAJobDescription}</p>
            <p>About: {user.aboutMe}</p>
            <h3>Contacts</h3>
            <ul>
                {Object.entries(contacts).map(([key, value]: any) =>
                    <li key={key}><strong>{key}</strong>: {value}</li>
                )}
            </ul>
        </div>
    );
};

