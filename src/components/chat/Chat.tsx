import React from 'react';
import {ChatMessage} from "./ChatMessage";
import {MessageType} from "./ChatPage";

type ChatProps = {
    messages: MessageType[]
}

export const Chat = ({ messages }: ChatProps) => {
    return (
        <>
            {messages.map((message: MessageType, index: number) => (
                <ChatMessage key={index} message={message}/>
            ))}
        </>
    );
};
