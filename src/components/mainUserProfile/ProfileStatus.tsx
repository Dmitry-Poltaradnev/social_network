import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {putUserStatusThunkCreator} from "../../reducer/userReducer";
import s from './mainUserProfile.module.css'

export const ProfileStatus = ({newUserStatus}: any) => {

    const dispatch = useDispatch();

    // Синхронизируем localStatus с newUserStatus
    useEffect(() => {
        setLocalStatus(newUserStatus);
    }, [newUserStatus]);

    const [localStatus, setLocalStatus] = useState(newUserStatus);

    const [inputMode, setInputMode] = useState(false);

    console.log('Render status component')

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
                       onChange={(e) => setLocalStatus(e.target.value)}/>
                <button onClick={updateStatusHandler}>Update status on server</button>
            </div>)}
        </>
    );
}

