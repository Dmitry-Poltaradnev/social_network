import React from 'react';
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {deleteLoginThunkCreator} from "../../reducer/authReducer";

export const Header = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state: RootStateType) => state.auth);

    return (
        <header className={s.header}>
            <p>poltaradnev@gmail.com</p>
            <p>xueta_vash_google</p>
            <h2>Header</h2>
            <div>{auth.isAuth ? <div className={s.loginWrapper}>
                    <p>
                        <button onClick={() => dispatch(deleteLoginThunkCreator())}>Logout</button>
                        - {auth.login}</p>
                </div> :
                // <span className={s.loginLink}><NavLink to="/login">Login</NavLink></span>
                <span></span>
            }</div>
        </header>
    );
};

