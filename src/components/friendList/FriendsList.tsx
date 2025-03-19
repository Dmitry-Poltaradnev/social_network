import React from 'react';
import {Friend} from "./friend/Friend";
import s from './FriendsList.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../reducer/store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

export const FriendsList = () => {

    const stateMessage = useSelector((state: RootStateType) => state.message.friendsBar);

    let friendsList = stateMessage.map((friend) => <Friend key={friend.id}
                                                           avaLink={friend.avaLink}
                                                           name={friend.name}/>)

    return (
        <ul className={s.friendList}>
            {friendsList}
        </ul>
    );
};

// const FriendsListComponent = WithAuthRedirect(FriendsList)
// export default FriendsListComponent