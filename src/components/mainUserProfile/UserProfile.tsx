import React, {useEffect} from 'react';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {setUserStatusThunkCreator} from "../../reducer/userReducer";
import {Loader} from "../loader/Loader";
import {MainUserPosts} from "./mainUserPosts/MainUserPosts";

const UserProfile = () => {

    const dispatch = useDispatch();

    const {isLoading} = useSelector((state: RootStateType) => state.user)

    const {newUserStatus, userId} = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        if (userId) {
            dispatch(setUserStatusThunkCreator());
        }
    }, [dispatch, userId]);


    return (
        <>
            {isLoading ? <Loader/> : <>
                <ProfileStatus newUserStatus={newUserStatus}/>
                <MainUserPosts/>
            </>}
        </>
    );
};

export const UserProfileComponent = WithAuthRedirect(UserProfile)