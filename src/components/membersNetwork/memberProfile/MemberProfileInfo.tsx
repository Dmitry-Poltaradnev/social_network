import React from 'react';
import s from './memberProfile.module.css'

export const MemberProfileInfo = ({user}: any) => {
    return (
        <div>
            {user.user.photos && user.user.photos.large ? (
                <img className={s.memberPhoto} src={user.user.photos.large}
                     alt="User profile"/>
            ) : (
                <div>Photo didn't load</div>
            )}
            <p>Name: {user.user.fullName}</p>
            <p>Description: {user.user.lookingForAJobDescription}</p>
            <p>About: {user.user.aboutMe}</p>
        </div>
    );
};

