import React, {useState} from 'react';
import {Button} from "antd";
import {ws} from "./Chat";

export const AddChatMessageForm = () => {

    const [text, setText] = useState<string>('');

    const sendMessage = () => {
        ws.send(text)
        setText("")
    }

    return (
        <div>
            <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
            <Button onClick={sendMessage}>Send</Button>
        </div>
    );
};

