import React from 'react';

type MessageType = {
    text: string;
}

export const Message = ({text}: MessageType) => {
    return (
        <div>{text}
            <hr/>
        </div>
    );
};

