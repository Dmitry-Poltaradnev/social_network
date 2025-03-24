import React, {useEffect, useState} from 'react';
import {ChatMessage} from "./ChatMessage";
import {MessageType, ws} from "./ChatPage";


export const Chat = () => {

    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        ws.addEventListener('message', (e: MessageEvent) => {
            let newMessages: MessageType[] = JSON.parse(e.data);
            setMessages((prev) => [...prev, ...newMessages]);
        })
    }, [setMessages])

    console.log(messages)
    return <>
        {messages.map((message: MessageType, index: number): any => <ChatMessage key={index} message={message}/>)}
    </>
};

