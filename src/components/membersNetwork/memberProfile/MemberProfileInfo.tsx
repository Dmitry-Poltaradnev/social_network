import React from 'react';
import s from './memberProfile.module.css'
import {ProfileType} from "../../../types/types";

type MemberProfileInfo = {
    user: ProfileType
}

export const MemberProfileInfo : React.FC<MemberProfileInfo> = ({user} ) => {
    return (
        <div>
            {user.photos && user.photos.large ? (
                <img className={s.memberPhoto} src={user.photos.large}
                     alt="Member profile"/>
            ) : (
                <div>Photo didn't load</div>
            )}
        </div>
    );
};

