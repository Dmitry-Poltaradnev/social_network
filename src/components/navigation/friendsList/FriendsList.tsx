import React from 'react';
import {Friend} from "./friend/Friend";
import s from './FriendsList.module.css'

export type FriendPropsType = {
    id: string
    avaLink: string
    name: string
}

type FriendsListProps = {
    friends: FriendPropsType[];
}

export const FriendsList = ({friends}: FriendsListProps) => {

    let friendsList = friends.map((friend) => <Friend key={friend.id} id={friend.id} avaLink={friend.avaLink}
                                                      name={friend.name}/>)

    return (
        <div className={s.friendsListWrapper}>
            <ul className={s.friendList}>
                {friendsList}
            </ul>
        </div>

    );
};

