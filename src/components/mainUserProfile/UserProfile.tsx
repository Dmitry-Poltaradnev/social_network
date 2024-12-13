import React, {useEffect} from 'react';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {savePhoto, setUserProfileThunkCreator, setUserStatusThunkCreator} from "../../reducer/userReducer";
import {Loader} from "../common/loader/Loader";
import {MainUserPosts} from "./mainUserPosts/MainUserPosts";
import s from './mainUserProfile.module.css'
import mainUserPhoto from '../../img/peon.gif'

const UserProfile = () => {

    const dispatch = useDispatch();

    const {isLoading, newUserStatus, userId, photos} = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        if (userId) {
            // !!!!!!!!--------------!!!!!!!!!
            dispatch(setUserProfileThunkCreator(userId));
            // !!!!!!!!--------------!!!!!!!!!
            dispatch(setUserStatusThunkCreator());
        }
    }, [dispatch, userId]);

    const mainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }
    return (
        <div className={s.mainUserProfile}>
            {isLoading ? <Loader/> : <>
                <div className={s.profileWrapper}>
                    <img className={s.userPhoto} src={photos || mainUserPhoto} alt="mainUserPhoto"/>
                    {userId && <input onChange={mainPhotoSelected} type="file"/>}
                    <ProfileStatus newUserStatus={newUserStatus}/>
                </div>
                <MainUserPosts/>
            </>}
        </div>
    );
};

export const UserProfileComponent = WithAuthRedirect(UserProfile)