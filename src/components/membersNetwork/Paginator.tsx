import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {setCurrentPage, toggleIsLoading} from "../../reducer/usersActions";
import s from './members.module.css'
import {getUsersThunkCreator} from "../../reducer/userReducer";

export const Paginator = () => {

    const dispatch = useDispatch();

    const {
        pageSize,
        totalCount,
        currentPage,
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
        <div>
            {pagesCountMass.map(i => <button onClick={() => setCurrentPageHandler(i)}
                                             className={currentPage === i ? s.activeButton : ''}
                                             key={i}>{i}</button>)}
        </div>
    );
};

