import React, { useState } from 'react';
import { Button } from 'antd';

type AddChatMessageFormProps = {
    ws: WebSocket | null;
};

export const AddChatMessageForm = ({ ws }: AddChatMessageFormProps) => {
    const [text, setText] = useState<string>('');

    const sendMessage = () => {
        if (text.trim().length > 0 && ws?.readyState === WebSocket.OPEN) {
            ws.send(text);
            setText('');
        }
    };

    return (
        <div>
            <textarea onChange={(e) => setText(e.target.value)} value={text} />
            <Button onClick={sendMessage}>Send</Button>
        </div>
    );
};

