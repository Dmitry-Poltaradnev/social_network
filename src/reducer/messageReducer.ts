import {v1} from "uuid";
import {DialogType, MessageType} from "../components/dialogs/Dialogs";
import {AddMessageType} from "./messageActions";

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

type MessageActions = AddMessageType

export type FriendsBarType = {
    id: string
    avaLink: string
    name: string
}

type MessagePageType = {
    messages: MessageType[]
    dialog: DialogType[]
}

type InitialMessageStateType = {
    friendsBar: FriendsBarType[]
    messagesPage: MessagePageType
}

export const initialMessageState: InitialMessageStateType = {
    messagesPage: {
        messages: [
            {id: v1(), text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, recusandae?'},
            {id: v1(), text: 'Lorem ipsum dolor sit amet'},
        ],
        dialog: [
            {id: v1(), name: 'Petr'},
            {id: v1(), name: 'Jack'},
            {id: v1(), name: 'Alexa'},
        ],
    },
    friendsBar: [
        {
            id: v1(),
            avaLink: 'https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504/avatarki.-2.jpg',
            name: 'Petr'
        },
        {
            id: v1(),
            avaLink: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
            name: 'Jack'
        }
    ],
};

export const messageReducer = (state = initialMessageState, action: MessageActions): InitialMessageStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messagesPage: {
                    ...state.messagesPage,
                    messages: [...state.messagesPage.messages, {id: v1(), text: action.payload.text}],
                },
            };
        default:
            return state;
    }
};

