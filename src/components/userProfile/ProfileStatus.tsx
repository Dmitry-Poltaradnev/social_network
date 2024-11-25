import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {putUserStatusThunkCreator, setUserStatusThunkCreator} from "../../reducer/userReducer";

export const ProfileStatus = () => {

    const dispatch = useDispatch();

    const {userStatus} = useSelector((state: RootStateType) => state.user)

    const [localStatus, setLocalStatus] = useState(userStatus);

    const {newUserStatus} = useSelector((state: RootStateType) => state.user)

    const [inputMode, setInputMode] = useState(false);

    const getST = () => {
        dispatch(setUserStatusThunkCreator())
    }

    const updateStatusHandler = () => {
        dispatch(putUserStatusThunkCreator(localStatus))
        getST()
        setInputMode(false);
    }


    return (
        <>
            {!inputMode ? <span onDoubleClick={() => setInputMode(true)}>User status: {userStatus}</span> : <div>
                <input autoFocus onBlur={updateStatusHandler} value={localStatus}
                       onChange={(e) => setLocalStatus(e.target.value)}/>
                <button onClick={updateStatusHandler}>обновить статус на сервере</button>
            </div>}
        </>
    );
};

