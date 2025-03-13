import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

export const Navigation = () => {

    return (
        <>
            <nav className={s.navigation}>
                <ul>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/userProfile">My
                        profile</NavLink></li>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/dialogs">Dialogs</NavLink></li>
                    <li><NavLink className={s.link} activeClassName={s.activeLink} to="/users">Users</NavLink></li>
                    <li><NavLink className={s.link} activeClassName={s.activeLink}
                                 to="/friendsList">FriendsList</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

