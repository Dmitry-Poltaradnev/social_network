import React from 'react';
import s from './Friend.module.css'

type FriendType = {
    avaLink: string,
    name: string,
}

export const Friend = ({avaLink, name}: FriendType) => {
    return (
        <li className={s.friendItem}>
            <img className={s.friendImg} src={avaLink} alt="avatarka"/>{name}
        </li>
    );
};

