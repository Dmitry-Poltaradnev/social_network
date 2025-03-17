import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import s from './mainUserProfile.module.css'
import {putUserStatusThunkCreator} from "../../reducer/profileReducer";
import {Button, Input, Tooltip} from "antd";
import {InfoCircleOutlined, UserOutlined} from "@ant-design/icons";

type ProfileStatusPropsType = {
    newUserStatus: string
}

export const ProfileStatus = ({newUserStatus}: ProfileStatusPropsType) => {

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
        (<div className={s.statusWrapper} onDoubleClick={changeInputModeHandler}>Status : {newUserStatus}</div>) : (
            <div className={s.noStatusField} onDoubleClick={changeInputModeHandler}>No status</div>)
    return (
        <>
            {!inputMode ? (stateStatus) : (<div style={{display: "flex", gap: 10}}>
                <Input style={{maxWidth: 400}} autoFocus value={localStatus} onBlur={updateStatusHandler}
                       onChange={(e) => setLocalStatus(e.target.value)}
                       placeholder="Enter your status"
                       prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                       suffix={
                           <Tooltip title="Click outside the input field or push the button to close">
                               <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}/>
                           </Tooltip>
                       }
                />
                <Button type={'primary'} onClick={updateStatusHandler}>Update status on server</Button>
            </div>)}
        </>
    );
}

