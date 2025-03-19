import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {Member} from "./Member";
import {Loader} from "../common/loader/Loader";
import {getUsersThunkCreator} from "../../reducer/userReducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {Paginator} from "../paginator/Paginator";
import {setCurrentPage} from "../../reducer/usersActions";
import s from "./members.module.css";
import {UserType} from "../../types/types";

const Members: React.FC = () => {
    const dispatch = useDispatch();

    const {users, pageSize, totalCount, currentPage, isLoading} = useSelector(
        (state: RootStateType) => state.user
    );

    useEffect(() => {
        dispatch(getUsersThunkCreator(currentPage, pageSize));
    }, [dispatch, currentPage, pageSize]);

    const onPageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <div>
            {isLoading ? (
                <Loader/>
            ) : (
                <div className={s.usersBlockWrapper}>
                    <ol className={s.usersContainer}>
                        {users.map((user: UserType) => (
                            <Member key={user.id} user={user}/>
                        ))}
                    </ol>
                    <Paginator
                        totalItemCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </div>
    );
};

export const UsersComponents = WithAuthRedirect(Members);
