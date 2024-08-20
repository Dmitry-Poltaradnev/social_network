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
    return (
        <div className={s.friendsListWrapper}>
            <ul className={s.friendList}>
                {friends.map((friend) => <Friend key={friend.id} id={friend.id} avaLink={friend.avaLink}
                                                 name={friend.name}/>)}
            </ul>
        </div>

    );
};

