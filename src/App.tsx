import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom';
import {v1} from "uuid";

function App() {

    // const state = {
    //     profilePage: {
    //         myPosts: [
    //             {id: v1(), text: 'Hello', likes: 12},
    //             {id: v1(), text: 'My second post', likes: 3},
    //             {id: v1(), text: 'Good buy!', likes: 5}
    //         ]
    //     },
    //     messagesPage: {
    //         messages: [
    //             {id: v1(), text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, recusandae?'},
    //             {id: v1(), text: 'Lorem ipsum dolor sit amet'},
    //         ],
    //         dialog: [
    //             {id: v1(), name: 'Petr'},
    //             {id: v1(), name: 'Jack'},
    //             {id: v1(), name: 'Alexa'},
    //         ],
    //     },
    //     friendsBar: [
    //         {
    //             id: v1(),
    //             avaLink: 'https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504/avatarki.-2.jpg',
    //             name: 'Petr'
    //         },
    //         {
    //             id: v1(),
    //             avaLink: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
    //             name: 'Jack'
    //         },
    //         {
    //             id: v1(),
    //             avaLink: 'https://i.pinimg.com/736x/68/f2/6f/68f26f05bb5152b02d918e4a3709493b.jpg',
    //             name: 'Alexa'
    //         },
    //     ]
    // }

    const [store, setStore] = useState({
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
            {
                id: v1(),
                avaLink: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
                name: 'Jack'
            },
            {
                id: v1(),
                avaLink: 'https://i.pinimg.com/736x/68/f2/6f/68f26f05bb5152b02d918e4a3709493b.jpg',
                name: 'Alexa'
            },
        ]
    })

    const addPost = (text: string) => {
        setStore({
            ...store,
            profilePage: {
                ...store.profilePage,
                myPosts: [...store.profilePage.myPosts, {id: v1(), text: text, likes: 0}]
            }
        });
    }
    const deletePost = (id: string) => {
        setStore({
            ...store,
            profilePage: {...store.profilePage, myPosts: store.profilePage.myPosts.filter(item => item.id !== id)}
        });
    }
    const addNewMessage = (text: string) => {
        setStore({
            ...store,
            messagesPage: {...store.messagesPage, messages: [...store.messagesPage.messages, {id: v1(), text: text}]}
        })
    }

    console.log(store)
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation friends={store.friendsBar}/>
                <Route path="/" exact render={() => <Profile deletePost={deletePost} addPost={addPost}
                                                             myPosts={store.profilePage.myPosts}/>}/>
                <Route path="/dialogs" render={() => <Dialogs addNewMessage={addNewMessage}  dialog={store.messagesPage.dialog}
                                                              messages={store.messagesPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile deletePost={deletePost} addPost={addPost}
                                                              myPosts={store.profilePage.myPosts}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
