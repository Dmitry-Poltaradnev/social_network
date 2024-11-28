import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {putUserStatusThunkCreator} from "../../reducer/userReducer";

export const ProfileStatus = ({newUserStatus}: any) => {

    const dispatch = useDispatch();

    // Синхронизируем localStatus с newUserStatus
    useEffect(() => {
        setLocalStatus(newUserStatus);
    }, [newUserStatus]);

    const [localStatus, setLocalStatus] = useState(newUserStatus);

    const [inputMode, setInputMode] = useState(false);

    const updateStatusHandler = () => {
        dispatch(putUserStatusThunkCreator(localStatus))
        setInputMode(false);
    }

    return (
        <>
            {!inputMode ? <span onDoubleClick={() => setInputMode(true)}>User status: {newUserStatus}</span> : <div>
                <input autoFocus onBlur={updateStatusHandler} value={localStatus}
                       onChange={(e) => setLocalStatus(e.target.value)}/>
                <button onClick={updateStatusHandler}>обновить статус на сервере</button>
            </div>}
        </>
    );
};

