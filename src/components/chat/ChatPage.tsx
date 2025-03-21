import React from 'react';
import {AddChatMessageForm} from "./AddChatMessageForm";
import {Chat} from "./Chat";

export const ChatPage = () => {
    return (
        <div>
            <Chat/>
            <AddChatMessageForm/>
        </div>
    );
};

