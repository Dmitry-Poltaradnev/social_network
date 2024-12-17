import React from 'react';
import s from './memberProfile.module.css'

export const MemberProfileInfo = ({user}: any) => {
    return (
        <div>
            {user.photos && user.photos.large ? (
                <img className={s.memberPhoto} src={user.photos.large}
                     alt="User profile"/>
            ) : (
                <div>Photo didn't load</div>
            )}
        </div>
    );
};

