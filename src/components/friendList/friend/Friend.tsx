import React from 'react';
import s from './Friend.module.css'
import {FriendType} from "../../../types/types";

export const Friend = ({avaLink, name}: FriendType) => {
    return (
        <li className={s.friendItem}><img className={s.friendImg} src={avaLink} alt="avatarka"/>{name}</li>
    );
};

