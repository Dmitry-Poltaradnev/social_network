import React from 'react';
import {MessageType} from "../Dialogs";

export const Message = ({text, id}: MessageType) => {
    return (
        <p>{text}
            <hr/>
        </p>
    );
};

