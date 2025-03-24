import React from 'react';
import {AddChatMessageForm} from "./AddChatMessageForm";
import {Chat} from "./Chat";

export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export const ChatPage = () => {

    return (
        <div>
            <Chat/>
            <AddChatMessageForm/>
        </div>
    );
};

