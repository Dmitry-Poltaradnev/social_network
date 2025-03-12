import React from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {deleteLoginThunkCreator} from "../../reducer/authReducer";
import {Button} from "../common/Button";

export const Header = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    return (
        <header className={s.header}>
            <p>poltaradnev@gmail.com</p>
            <p>31665</p>
            <h2>"Social network"</h2>
            <div>{auth.isAuth && <div className={s.loginWrapper}>
                <p>
                    <Button btnName={'Logout'} btnEffect={() => dispatch(deleteLoginThunkCreator())}/>
                    -{auth.login}</p>
            </div>
            }</div>
        </header>
    );
};

