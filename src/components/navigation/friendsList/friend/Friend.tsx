import React from 'react';
import {FriendPropsType} from "../FriendsList";
import s from './Friend.module.css'

export const Friend = ({avaLink,id,name}: FriendPropsType) => {
    return (
       <li className={s.friendItem}><img className={s.friendImg} src={avaLink} alt="avatarka"/>{name}</li>
    );
};

