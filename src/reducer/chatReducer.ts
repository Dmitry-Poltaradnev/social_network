import {Dispatch} from 'redux';
import {createWebSocket, closeWebSocket, sendMessage} from '../api/chat-api';

const initialState = {
    chatMessages: [] as MessageType[],
};

export type MessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
};

type ChatInitialState = typeof initialState;

export const GET_MESSAGES = 'GET_MESSAGES';

type GetMessagesType = { type: typeof GET_MESSAGES; payload: { messages: MessageType[] } };
type ChatActions = GetMessagesType

export const chatReducer = (state: ChatInitialState = initialState, action: ChatActions): ChatInitialState => {
    switch (action.type) {
        case GET_MESSAGES:
            return {...state, chatMessages: [...state.chatMessages, ...action.payload.messages]};
        default:
            return state;
    }
};

export const getMessages = (messages: MessageType[]): GetMessagesType => ({type: GET_MESSAGES, payload: {messages}});

export const initializeChatTC = () => (dispatch: Dispatch<ChatActions>) => {
    const ws: WebSocket = createWebSocket();

    ws.addEventListener('message', (e: MessageEvent) => {
        const newMessages: MessageType[] = JSON.parse(e.data);
        dispatch(getMessages(newMessages));
    });

    ws.addEventListener('close', () => {
        console.log('Socket closed. Reconnecting...');
        setTimeout(() => dispatch(initializeChatTC() as any), 3000);
    });

    ws.addEventListener('error', (e: any) => {
        console.error('WebSocket error:', e);
    });

    return () => closeWebSocket();
};

export const sendMessageTC = (message: string) => () => {
    sendMessage(message);
};

