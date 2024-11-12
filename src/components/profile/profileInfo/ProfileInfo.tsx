import React from 'react';

export const ProfileInfo = ({user}: any) => {
    return (
        <div>
                <img style={{width: '100px', height: '100px', margin: '20px'}} src={user.user.photos.large}
                     alt="photo"/>
            <p>Name: {user.user.fullName}</p>
            <p>Description: {user.user.lookingForAJobDescription}</p>
            <p>About: {user.user.aboutMe}</p>
        </div>
    );
};

