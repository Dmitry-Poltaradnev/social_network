import React, {useState} from 'react';

export const ProfileStatus = ({initStatus} : any ) => {

    const [status, setStatus] = useState(initStatus)
    const [inputMode, setInputMode] = useState(false);

    const setInputHandler = () => {
        setInputMode(!inputMode)
    }

    return (
        <>
            {/*{!inputMode ? <span onDoubleClick={setInputHandler}>{status}</span> :*/}
            {/*    <input autoFocus onBlur={setInputHandler} value={status} onChange={(e) => setStatus(e.target.value)}/>}*/}
        </>

    );
};

