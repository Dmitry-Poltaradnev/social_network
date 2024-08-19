import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {v1} from "uuid";

export const Dialogs = () => {

    const [dialog, setDialog] = useState([
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Misha'},
        {id: v1(), name: 'Gena'},
    ]);

    return (
        <div className={s.back}>
            <h2>Dialogs</h2>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialogs}>
                    <div className={s.dialogItems}>
                        {dialog.map((item) =>  <DialogItem name={item.name} id={item.id} />)}
                    </div>
                </div>
                <div className={s.messages}>
                   <Message text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, recusandae?'}/>
                   <Message text={'Lorem ipsum dolor sit amet'}/>
                </div>

            </div>
        </div>

    );
};

