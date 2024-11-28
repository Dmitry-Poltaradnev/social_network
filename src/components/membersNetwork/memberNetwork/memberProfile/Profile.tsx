import React, {useEffect} from 'react';
import s from './profile.module.css';
import {ProfileInfo} from "./memberProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../reducer/store";
import {useParams} from "react-router-dom";
import {setUserProfileThunkCreator} from "../../../../reducer/userReducer";

export const Profile = () => {

    const {userId} = useParams<{ userId: string }>();

    console.log(userId)

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.user);

    useEffect(() => {
        dispatch(setUserProfileThunkCreator(userId));
    }, []);

    return (
        <div className={s.back}>
            <ProfileInfo user={user}/>
        </div>
    );
};

