import React from 'react';

export const ProfileContacts = ({contacts, userId}: any) => {
    if (!contacts) {
        return <p>No contacts available</p>
    }
    return (
        <>
            {userId && <div>
                <button>edit</button>
            </div>}
            <h3>Contacts</h3>
            <ul>
                {Object.entries(contacts).map(([key, value]: any) =>
                    <li key={key}><strong>{key}</strong>: {value}</li>
                )}
            </ul>
        </>
    );
};

