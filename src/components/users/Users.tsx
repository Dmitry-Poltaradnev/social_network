import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";
import {setCurrentPage, toggleIsLoading} from "../../reducer/usersActions";
import s from './Users.module.css'
import {Loader} from "../loader/Loader";
import {getUsersThunkCreator} from "../../reducer/userReducer";

export const Users = () => {

    const dispatch = useDispatch();

    const {
        users,
        pageSize,
        totalCount,
        currentPage,
        isLoading,
    } = useSelector((state: RootStateType) => state.user)

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize))
    }, [currentPage])

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
                    <ol>
                        {users.map((user: any) => <User key={user.id} user={user}/>)}
                    </ol>
                    {pagesCountMass.map(i => <button onClick={() => setCurrentPageHandler(i)}
                                                     className={currentPage === i ? s.activeButton : ''}
                                                     key={i}>{i}</button>)}
                </div>
                }
            </div>
        </>
    );
};

