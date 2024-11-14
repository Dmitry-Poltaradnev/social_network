import React, {useEffect} from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../../reducer/authActions";
import axios from "axios";
import {RootStateType} from "../../reducer/store";
import {NavLink} from "react-router-dom";

export const Header = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
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

