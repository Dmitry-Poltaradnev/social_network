import React from 'react';
import {MessageType} from "../Dialogs";

export const Message = ({text, id}: MessageType) => {
    return (
        <div>{text}
            <hr/>
        </div>
    );
};

