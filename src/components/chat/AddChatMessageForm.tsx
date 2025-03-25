import React, {useState} from 'react';
import {Button, Input} from 'antd';
import s from './chatPage.module.css'

type AddChatMessageFormProps = {
    ws: WebSocket | null;
};

export const AddChatMessageForm = ({ws}: AddChatMessageFormProps) => {
    const [text, setText] = useState<string>('');

    const sendMessage = () => {
        if (text.trim().length > 0 && ws?.readyState === WebSocket.OPEN) {
            ws.send(text);
            setText('');
        }
    };

    return (
        <div className={s.sendBlockWrapper} >
            <Input onChange={(e) => setText(e.target.value)} value={text} placeholder="Input message"/>
            <Button type={'primary'} onClick={sendMessage}>Send</Button>
        </div>
    );
};

