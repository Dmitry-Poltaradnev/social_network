import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../Dialogs";

export const DialogItem = ({name, id}: DialogType) => {
    return (
        <li className={s.dialogItem}>
            <NavLink className={s.itemLink} to={`/dialogs/${id}`}>{name}</NavLink>
        </li>
    );
};

