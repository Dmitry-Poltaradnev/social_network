import React from 'react';
import {MessageType} from "../Dialogs";

export const Message = ({text}: MessageType) => {
    return <span>{text}</span>
};

