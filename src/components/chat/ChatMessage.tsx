import React from 'react';

export const ChatMessage = ({message}: any) => {
    return (
        <div>
            <img src={message.photo} alt="photo"/>
            <p>Name: {message.userName}</p>
            <p>Message: {message.message}</p>
            <p>UserId: {message.userId}</p>
        </div>
    );
};

