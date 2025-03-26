import React from 'react';
import s from './chatPage.module.css'
import {MessageType} from "../../reducer/chatReducer";

type ChatMessagePropsType = {
    message: MessageType
}

export const ChatMessage = ({message}: ChatMessagePropsType) => {
    return (
        <div>
            <img className={s.chatIcon} src={message.photo} alt="photo"/>
            <p>Name: {message.userName}</p>
            <p>Message: {message.message}</p>
            <p>UserId: {message.userId}</p>
        </div>
    );
};

