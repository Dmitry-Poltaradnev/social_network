import React from 'react';
import {Friend} from "./friend/Friend";
import s from './FriendsList.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {FriendType} from "../../types/types";

const FriendsList = () => {

    const stateMessage = useSelector((state: RootStateType) => state.message.friendsBar) as FriendType[];

    let friendsList = stateMessage.map((friend : FriendType ) => <Friend key={friend.id}
                                                           avaLink={friend.avaLink}
                                                           name={friend.name}/>)

    return (
        <>
            {<div className={s.friendsListWrapper}>
                <ul className={s.friendList}>
                    {friendsList}
                </ul>
            </div>}
        </>
    );
};

const FriendsListComponent = WithAuthRedirect(FriendsList)
export default FriendsListComponent