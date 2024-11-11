import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";
import axios from "axios";
import {setCurrentPage, setTotalCount, setUser, toggleIsLoading} from "../../reducer/usersActions";
import s from './Users.module.css'
import {Loader} from "../loader/Loader";

export const Users = () => {

    const dispatch = useDispatch();

    const {users, pageSize, totalCount, currentPage, isLoading} = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        dispatch(toggleIsLoading(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then((response) => {
            dispatch(setTotalCount(response.data.totalCount))
            dispatch(setUser(response.data.items))
        }).finally(() => {
            dispatch(toggleIsLoading(false))
        })
    }, [currentPage])


    console.log(isLoading)
    let pagesCount = Math.ceil(totalCount / pageSize)

    let pagesCountMass = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesCountMass.push(i)
    }

    const setCurrentPageHandler = (currentPage: number) => {
        dispatch(toggleIsLoading(true))
        dispatch(setCurrentPage(currentPage))
    }

    return (
        <>
            <div className='users-container'>
                <h3>Users</h3>
                {isLoading ? <Loader/> : <div>
                    <ul>
                        {users.map((user: any) => <User key={user.id} user={user}/>)}
                    </ul>
                    {pagesCountMass.map(i => <button onClick={() => setCurrentPageHandler(i)}
                                                     className={currentPage === i ? s.activeButton : ''}
                                                     key={i}>{i}</button>)}
                </div>
                }
            </div>
        </>
    );
};

