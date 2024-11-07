import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";
import axios from "axios";
import {setTotalCount, setUser} from "../../reducer/usersActions";
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

    const pageSizes = useSelector((state: RootStateType) => state.user.pageSizes)

    const totalCount = useSelector((state: RootStateType) => state.user.totalCount)

    const currentPage = useSelector((state: RootStateType) => state.user.currentPage)


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSizes}`).then((response) => {
            dispatch(setTotalCount(response.data.totalCount))
            console.log(response.data.totalCount)
            dispatch(setUser(response.data.items))
        })
    }, [dispatch])

    console.log(`users : ${users}`)
    console.log(`pageSizes ${pageSizes}`)
    console.log(`totalCount ${totalCount}`)

    let pagesCount = Math.ceil(totalCount / pageSizes)

    let pagesCountMass = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesCountMass.push(i)
    }

    return (
        <div className='users-container'>
            <h3>Users</h3>
            <ul>
                {users.map((user: any) => <User key={user.id} user={user}/>)}
            </ul>
            {pagesCountMass.map(i => <button className={currentPage === i ? s.activeButton : ''} key={i}>{i}</button>)}
        </div>
    );
};

