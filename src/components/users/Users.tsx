import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";
import axios from "axios";
import {setCurrentPage, setTotalCount, setUser} from "../../reducer/usersActions";
import s from './Users.module.css'

// export type LocationType = {
//     country: string
//     city: string
// }
// export type UserPropsType = {
//     id: string
//     follow: boolean
//     fullName: string
//     status: string
//     location: LocationType
// }

export const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector((state: RootStateType) => state.user.users)

    const pageSize = useSelector((state: RootStateType) => state.user.pageSize)

    const totalCount = useSelector((state: RootStateType) => state.user.totalCount)

    const currentPage = useSelector((state: RootStateType) => state.user.currentPage)


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then((response) => {
            dispatch(setTotalCount(response.data.totalCount))
            dispatch(setUser(response.data.items))
        })
    }, [currentPage, pageSize])

    console.log(`users : ${users}`)
    console.log(`pageSize ${pageSize}`)
    console.log(`totalUsersCount ${totalCount}`)

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pagesCountMass = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesCountMass.push(i)
    }

    const setCurrentPageHandler = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage))
    }

    return (
        <div className='users-container'>
            <h3>Users</h3>
            <ul>
                {users.map((user: any) => <User key={user.id} user={user}/>)}
            </ul>
            {pagesCountMass.map(i => <button onClick={() => setCurrentPageHandler(i)}
                                             className={currentPage === i ? s.activeButton : ''} key={i}>{i}</button>)}
        </div>
    );
};

