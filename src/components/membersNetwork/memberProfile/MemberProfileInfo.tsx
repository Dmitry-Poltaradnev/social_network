import React from 'react';
import s from './memberProfile.module.css'
import {UserType} from "../../../types/types";

type MemberProfileInfo = {
    user: UserType
}

export const MemberProfileInfo : React.FC<MemberProfileInfo> = ({user} ) => {
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

