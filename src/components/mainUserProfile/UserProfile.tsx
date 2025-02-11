import React, {useEffect, useState} from 'react';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {
    savePhoto,
    saveProfileThunkCreator,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator
} from "../../reducer/userReducer";
import {Loader} from "../common/loader/Loader";
import {MainUserPosts} from "./mainUserPosts/MainUserPosts";
import s from './mainUserProfile.module.css'
import mainUserPhoto from '../../img/peon.gif'
import {ProfileContacts} from "./ProfileContacts";
import ProfileContactsForm from "./ProfileContactsForm";
import defaultUserPhoto from "../../img/default-avatar-profile.avif";

const UserProfile = () => {

    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);

    const {
        isLoading,
        newUserStatus,
        userId,
        photos,
        user
    } = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        if (userId) {
            console.log(typeof userId);
            dispatch(setUserProfileThunkCreator(userId));
            dispatch(setUserStatusThunkCreator());
        }
    }, [dispatch, userId]);

    const mainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }

    const toEditMode = () => {
        setEditMode(!editMode);
    }

    const onSubmit = ({fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts}: any) => {
        dispatch(saveProfileThunkCreator(fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts))
        setEditMode(false)
    }

    const editProfileContacts = (editMode: any) => {
        return !editMode ?
            <ProfileContacts user={user} contacts={user?.contacts} userId={userId} toEditMode={toEditMode}/> :
            <ProfileContactsForm initialValues={user || {}} contacts={user?.contacts} onSubmit={onSubmit}/>
    }

    const photoSrc = user.photos.large ?? user.photos.small ?? defaultUserPhoto;

    return (
        <div className={s.mainUserProfile}>
            {isLoading ? <Loader/> : <>
                <div className={s.profileWrapper}>
                    {/*todo fix download photo*/}
                    <img className={s.userPhoto} src={photoSrc} alt="user_photo"/>
                    {/*====*/}
                    {userId && <input onChange={mainPhotoSelected} type="file"/>}
                    <ProfileStatus newUserStatus={newUserStatus}/>
                    {editProfileContacts(editMode)}
                </div>
                <MainUserPosts/>
            </>}
        </div>
    );
};

export const UserProfileComponent = WithAuthRedirect(UserProfile)