let ws: WebSocket | null = null;

export const createWebSocket = () => {
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    return ws;
//     wss://social-network.samuraijs.com/handlers/ChatHandler.ashx
};

export const closeWebSocket = () => {
    ws?.close();
};
