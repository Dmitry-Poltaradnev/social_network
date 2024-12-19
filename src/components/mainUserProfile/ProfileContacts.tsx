import React from 'react';
import s from './mainUserProfile.module.css'

export const ProfileContacts = ({contacts, userId, toEditMode, user}: any) => {

    if (!contacts) {
        return <p>Loading...</p>;
    }

    return (
        <div className={s.profileContacts}>
            {userId && <div>
                <button onClick={toEditMode}>edit</button>
            </div>}
            <p>About me: {user.aboutMe} </p>
            <p>Full name: {user.fullName}</p>
            <p>Free for work: {user.lookingForAJob ? 'yes' : 'no'} </p>
            <p>My skills: {user.lookingForAJobDescription}</p>
            <h3>Contacts</h3>
            <ul>
                {Object.entries(contacts).map(([key, value]: any) =>
                    <li key={key}><strong>{key}</strong>: {value || 'null'}</li>
                )}
            </ul>
        </div>
    );
};

