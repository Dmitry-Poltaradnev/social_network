import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {User} from "./User";
import axios from "axios";
import {setUser} from "../../reducer/usersActions";

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

    const getUsers = () =>{
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                console.log(response.data)
                dispatch(setUser(response.data.items))
            })
    }

    console.log(users)

    return (
        <div className='users-container'>
            <button onClick={getUsers}>Get Users</button>
            <h3>Users</h3>
            <ul>
                {users.map((user: any) => <User key={user.id} user={user}/>)}
            </ul>
        </div>
    );
};

