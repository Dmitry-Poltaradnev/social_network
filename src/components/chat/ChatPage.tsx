import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Chat} from './Chat';
import {AddChatMessageForm} from './AddChatMessageForm';
import {initializeChatTC, sendMessageTC} from "../../reducer/chatReducer";
import {closeWebSocket} from "../../api/chat-api";
import {AppStateType} from "../../reducer/store";

export const ChatPage = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state: AppStateType) => state.chat.chatMessages);

    useEffect(() => {
        dispatch(initializeChatTC());
        return () => dispatch(closeWebSocket());
    }, [dispatch]);

    const handleSendMessage = (message: string) => {
        dispatch(sendMessageTC(message));
    };

    return (
        <div>
            <Chat messages={messages}/>
            <AddChatMessageForm onSendMessage={handleSendMessage}/>
        </div>
    );
};
