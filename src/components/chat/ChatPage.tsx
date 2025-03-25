import React, { useEffect, useState, useRef } from 'react';
import { createWebSocket, closeWebSocket } from '../../api/chatAPI';
import { Chat } from './Chat';
import { AddChatMessageForm } from './AddChatMessageForm';

export type MessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
};

export const ChatPage = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        ws.current = createWebSocket();

        const handleMessage = (e: MessageEvent) => {
            const newMessages: MessageType[] = JSON.parse(e.data);
            setMessages((prev) => [...prev, ...newMessages]);
        };

        const handleClose = () => {
            console.log('Socket closed. Reconnecting...');
            setTimeout(() => {
                ws.current = createWebSocket();
                ws.current?.addEventListener('message', handleMessage);
            }, 3000);
        };

        ws.current.addEventListener('message', handleMessage);
        ws.current.addEventListener('close', handleClose);

        return () => {
            ws.current?.removeEventListener('message', handleMessage);
            ws.current?.removeEventListener('close', handleClose);
            closeWebSocket();
        };
    }, []);

    return (
        <div>
            <Chat messages={messages} />
            <AddChatMessageForm ws={ws.current} />
        </div>
    );
};
