import React from 'react';
import s from './Friend.module.css'

export const Friend = ({avaLink,id,name}: any) => {
    return (
       <li className={s.friendItem}><img className={s.friendImg} src={avaLink} alt="avatarka"/>{name}</li>
    );
};

