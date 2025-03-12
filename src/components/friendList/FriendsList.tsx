import React from 'react';
import {Friend} from "./friend/Friend";
import s from './FriendsList.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

const FriendsList = () => {

    const stateMessage = useSelector((state: RootStateType) => state.message.friendsBar);


    let friendsList = stateMessage.map((friend) => <Friend key={friend.id} id={friend.id}
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