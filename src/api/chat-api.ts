let ws: WebSocket | null = null;

export const createWebSocket = () => {
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    return ws;
};

export const closeWebSocket = () => {
    ws?.close();
};
