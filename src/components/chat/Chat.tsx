import React, {useEffect, useState} from 'react';
import {ChatMessage} from "./ChatMessage";

type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ws = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export const Chat = () => {

    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            let newMessages: MessageType[] = JSON.parse(e.data);
            setMessages((prev) => [...newMessages, ...prev]);
        })
    }, [])

    console.log(messages)

    return (<>
        {messages.map((message): any => <ChatMessage message={message}/>)}
    </>)
};

