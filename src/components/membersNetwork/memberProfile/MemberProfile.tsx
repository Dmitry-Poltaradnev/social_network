import React, {useEffect} from 'react';
import s from './memberProfile.module.css';
import {MemberProfileInfo} from "./MemberProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../reducer/store";
import {useParams} from "react-router-dom";
import {ProfileContacts} from "../../mainUserProfile/ProfileContacts";
import {setUserProfileThunkCreator} from "../../../reducer/profileReducer";

export const MemberProfile = () => {

    const {userId} = useParams<{ userId: string }>();

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.profile.user);

    useEffect(() => {
        dispatch(setUserProfileThunkCreator(Number(userId)));
    }, [dispatch, userId]);

    return (
        <div className={s.back}>
            <MemberProfileInfo user={user}/>
            {user?.contacts && <ProfileContacts contacts={user.contacts} user={user}/>}
        </div>
    );
};

