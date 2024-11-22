import React, {useState} from 'react';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {putUserStatusThunkCreator, setUserStatusThunkCreator} from "../../reducer/userReducer";

const UserProfile = () => {
    const initStatus = 'Input your status';

    const dispatch = useDispatch();

    const {userStatus} = useSelector((state: RootStateType) => state.user)

    const {newUserStatus} = useSelector((state: RootStateType) => state.user)

    const [stateNewStatus, setNewStatus] = useState('');


    const updateStatusHandler = () => {
       dispatch(putUserStatusThunkCreator(stateNewStatus))
    }

    const getST = () => {
        dispatch(setUserStatusThunkCreator())
    }


    return (
        <>
            <input value={stateNewStatus} onChange={event =>   setNewStatus(event.currentTarget.value)} type="text"/>
            <button onClick={updateStatusHandler}>обновить статус на сервере</button>
            <span>статус с сервера {newUserStatus}</span>
            {/*=====*/}
            <span>статус локальный {userStatus}</span>
            <button onClick={getST}>Для получения статуса</button>
            <ProfileStatus initStatus={initStatus}/>
        </>
    );
};

export const UserProfileComponent = WithAuthRedirect(UserProfile)