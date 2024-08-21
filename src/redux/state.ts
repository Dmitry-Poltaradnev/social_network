import {v1} from "uuid";

export const state = {
    profilePage: {
        myPosts: [
            {id: v1(), text: 'Hello', likes: 12},
            {id: v1(), text: 'My second post', likes: 3},
            {id: v1(), text: 'Good buy!', likes: 5}
        ]
    },
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
        {id: v1(), avaLink: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png', name: 'Jack'},
        {id: v1(), avaLink: 'https://i.pinimg.com/736x/68/f2/6f/68f26f05bb5152b02d918e4a3709493b.jpg', name: 'Alexa'},
    ]
}



