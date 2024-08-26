import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

type Dialog = {
    id: string
    name: string
}
type Messages = {
    id: string
    text: string
}
type DialogProps = {
    dialog: Dialog[]
    messages: Messages[]
    addNewMessage: (text: string) => void
}

export const Dialogs = ({dialog, messages, addNewMessage}: DialogProps) => {

    const addMessageHandler = (input: string) => {
        addNewMessage(input)
        setInputState('')
    }

    const [inputState, setInputState] = useState('')

    return (
        <div className={s.back}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs}>
                    <div className={s.dialogItems}>
                        {dialog.map((item) => <DialogItem key={item.id} name={item.name} id={item.id}/>)}
                    </div>
                </div>
                <div className={s.messages}>
                    {messages.map((item) => <Message key={item.id} text={item.text}/>)}
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

