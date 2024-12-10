import React, {useEffect} from 'react';
import s from './memberProfile.module.css';
import {MemberProfileInfo} from "./MemberProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../reducer/store";
import {useParams} from "react-router-dom";
import {setUserProfileThunkCreator} from "../../../reducer/userReducer";

export const MemberProfile = () => {

    const {userId} = useParams<{ userId: string }>();

    const dispatch = useDispatch();

    const user = useSelector((state: RootStateType) => state.user);

    useEffect(() => {
        dispatch(setUserProfileThunkCreator(userId));
    }, [dispatch,userId]);

    return (
        <div className={s.back}>
            <MemberProfileInfo user={user}/>
        </div>
    );
};

