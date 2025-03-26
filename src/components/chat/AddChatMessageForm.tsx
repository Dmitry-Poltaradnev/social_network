import React, {useState} from 'react';
import {Button, Input} from 'antd';
import s from './chatPage.module.css'

type Props = {
    onSendMessage: (message: string) => void;
};

export const AddChatMessageForm = ({onSendMessage}: Props) => {
    const [text, setText] = useState('');

    const sendMessage = () => {
        if (text.trim().length > 0) {
            onSendMessage(text);
            setText('');
        }
    };

    return (
        <div className={s.sendBlockWrapper}>
            <Input onChange={(e) => setText(e.target.value)} value={text} placeholder="Input message"/>
            <Button type='primary' onClick={sendMessage}>Send</Button>
        </div>
    );
};
