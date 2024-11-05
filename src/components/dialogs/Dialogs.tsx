import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessage} from "../../reducer/messageActions";

import {RootStateType} from "../../reducer/store";

export type MessageType = {
    id: string
    text: string
}
export type Dialog = {
    id: string
    name: string
}

export const Dialogs = () => {

    const dispatch = useDispatch()

    const messages = useSelector((state: RootStateType) => state.message.messagesPage.messages);
    const dialog = useSelector((state: RootStateType) => state.message.messagesPage.dialog);

    const addMessageHandler = (input: string) => {
        if (input.trim().length > 0) {
            dispatch(addNewMessage(input))
            setInputState('')
        }
    }
    const [inputState, setInputState] = useState('')

    return (
        <div className={s.back}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs}>
                    <div className={s.dialogItems}>
                        {dialog.map((dialog: Dialog) => <DialogItem key={dialog.id} name={dialog.name}
                                                                    id={dialog.id}/>)}
                    </div>
                </div>
                <div className={s.messages}>
                    {messages.map((messages: MessageType) => <Message key={messages.id} text={messages.text}/>)}
                    <div>
                        <input value={inputState} onChange={event => setInputState(event.currentTarget.value)}
                               type="text"/>
                        <button onClick={() => addMessageHandler(inputState)}>Send message</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

