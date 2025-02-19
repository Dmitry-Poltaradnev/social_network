import React, {ChangeEvent, useEffect, useState} from 'react';
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

    const [editMode, setEditMode] = useState<boolean>(false);

    const {
        isLoading,
        newUserStatus,
        userId,
        photos,
        user
    } = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        if (userId) {
            dispatch(setUserProfileThunkCreator(userId));
            dispatch(setUserStatusThunkCreator());
        }
    }, [dispatch, userId]);

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }

    const toEditMode = () => {
        setEditMode(!editMode);
    }
    const onSubmit = ({id, photos, fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts}: any) => {
        dispatch(saveProfileThunkCreator(id, photos, fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts))
        setEditMode(false)
    }

    const editProfileContacts = (editMode: boolean) => {
        return !editMode ?
            <ProfileContacts contacts={user.contacts} user={user} userId={Number(userId)} toEditMode={toEditMode}/> :
            <ProfileContactsForm initialValues={user || {}} contacts={user?.contacts} onSubmit={onSubmit}/>
    }

    const photoSrc = user?.photos?.large ?? user?.photos?.small ?? defaultUserPhoto;

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