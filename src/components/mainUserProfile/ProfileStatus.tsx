import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {putUserStatusThunkCreator} from "../../reducer/userReducer";
import s from './mainUserProfile.module.css'

type ProfileStatusPropsType = {
    newUserStatus: string
}

export const ProfileStatus: React.FC<ProfileStatusPropsType> = ({newUserStatus}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setLocalStatus(newUserStatus);
    }, [newUserStatus]);

    const [localStatus, setLocalStatus] = useState<string>(newUserStatus);

    const [inputMode, setInputMode] = useState<boolean>(false);

    const updateStatusHandler = () => {
        dispatch(putUserStatusThunkCreator(localStatus))
        setInputMode(false);
    }

    const changeInputModeHandler = () => {
        setInputMode(true)
    }

    const stateStatus = newUserStatus ?
        (<span onDoubleClick={changeInputModeHandler}>User status: {newUserStatus}</span>) : (
            <span className={s.noStatusField} onDoubleClick={changeInputModeHandler}>No status</span>)
    return (
        <>
            {!inputMode ? (stateStatus) : (<div>
                <input autoFocus onBlur={updateStatusHandler} value={localStatus}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalStatus(e.target.value)}/>
                <button onClick={updateStatusHandler}>Update status on server</button>
            </div>)}
        </>
    );
}

