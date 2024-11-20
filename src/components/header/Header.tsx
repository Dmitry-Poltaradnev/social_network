import React, {useEffect} from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {NavLink} from "react-router-dom";
import {getLoginThunkCreator} from "../../reducer/authReducer";

export const Header = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    useEffect(() => {
        dispatch(getLoginThunkCreator())
    }, [dispatch])

    return (
        <header className={s.header}>
            <h2>Header</h2>
            <div>{auth.isAuth ? <p>Login: {auth.login}</p> :
                <span className={s.loginLink}><NavLink to={'/login'}>Login</NavLink></span>}</div>
        </header>
    );
};

