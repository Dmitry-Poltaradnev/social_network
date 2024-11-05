import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import {FriendsList} from "./friendsList/FriendsList";

export const Navigation = () => {

    return (
        <>
            <nav className={s.navigation}>
                <ul>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/profile">Profile</NavLink></li>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/dialogs">Dialogs</NavLink></li>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/users">Users</NavLink></li>
                </ul>
            <FriendsList/>
            </nav>
        </>

    );
};

