import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem = ({name,id}: DialogItemPropsType) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

