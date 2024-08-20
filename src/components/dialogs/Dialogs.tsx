import React from 'react';
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
}

export const Dialogs = ({dialog, messages}: DialogProps) => {
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
                </div>
            </div>
        </div>

    );
};

