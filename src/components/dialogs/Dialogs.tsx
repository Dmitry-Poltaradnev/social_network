import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessage} from "../../reducer/messageActions";
import {RootStateType} from "../../reducer/store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./message/AddMessageForm";

type AddMessageFormType = {
    text: string
}

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

    const AddMessageReduxForm = reduxForm<AddMessageFormType>({
        form: 'addMessage',
    })(AddMessageForm)

    const addMessage = (formData: { text: string }) => {
        if (formData.text.trim().length > 0) {
            dispatch(addNewMessage(formData.text))
        }
    }

    return (
        <div className={s.back}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs}>
                    <div className={s.dialogItems}>
                        {dialog.map((dialog: DialogType) => <DialogItem key={dialog.id} name={dialog.name}
                                                                        id={dialog.id}/>)}
                    </div>
                </div>
                <div className={s.messages}>
                    {messages.map((messages: MessageType) => <Message key={messages.id} id={messages.id}
                                                                      text={messages.text}/>)}
                    <AddMessageReduxForm onSubmit={addMessage}/>
                </div>
            </div>
        </div>
    );
};

// const DialogsComponent = WithAuthRedirect(Dialogs);
// export default DialogsComponent
