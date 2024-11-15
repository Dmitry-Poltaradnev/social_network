import React, {useEffect} from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../../reducer/authActions";
import {RootStateType} from "../../reducer/store";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

export const Header = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    useEffect(() => {
        userAPI.getLogin().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUser({id, email, login}))
            }
        })
    }, [])

    return (
        <header className={s.header}>
            <h2>Header</h2>
            <div>{auth.isAuth ? <p>Login: {auth.login}</p> :
                <span className={s.loginLink}><NavLink to={'/login'}>Login</NavLink></span>}</div>
        </header>
    );
};

