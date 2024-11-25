import React from 'react';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatus} from "./ProfileStatus";

const UserProfile = () => {

    return (
        <>
            <ProfileStatus/>
        </>
    );
};

export const UserProfileComponent = WithAuthRedirect(UserProfile)