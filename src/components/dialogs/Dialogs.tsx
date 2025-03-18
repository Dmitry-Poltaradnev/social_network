import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessage} from "../../reducer/messageActions";
import {RootStateType} from "../../reducer/store";
import {AddMessageReduxForm} from "./message/AddMessageForm";

export type MessageType = {
    id: string
    text: string
}

export type DialogType = {
    id: string
    name: string
}

export const Dialogs = () => {

    const dispatch = useDispatch()

    const {messages, dialog} = useSelector((state: RootStateType) => state.message.messagesPage)

    const addMessage = (formData: any, reset: () => void) => {
        if (formData.post.trim().length > 0) {
            dispatch(addNewMessage(formData.post))
            reset()
        }
    }

    return (
        <div className={s.back}>
            <h2 style={{fontStyle: "italic"}}>Dialogs : </h2>
            <div className={s.dialogsBlockWrapper}>
                <div className={s.dialogs}>
                    <h3>Select user</h3>
                    <ul className={s.dialogItems}>
                        {dialog.map((dialog: DialogType) => <DialogItem key={dialog.id} name={dialog.name}
                                                                        id={dialog.id}/>)}
                    </ul>
                </div>
                <div className={s.messages}>
                    <ol>
                        {messages.map((message: MessageType) => (
                            <li key={message.id}>
                                <Message id={message.id} text={message.text}/>
                            </li>
                        ))}
                    </ol>
                    <AddMessageReduxForm
                        onSubmit={(formData: any, dispatch: any, props: any) => addMessage(formData, props.reset)}/>
                </div>
            </div>
        </div>
    );
};

// const DialogsComponent = WithAuthRedirect(Dialogs);
// export default DialogsComponent
