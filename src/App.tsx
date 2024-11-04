import React, {useReducer} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom';
import {initialMessageState, messageReducer} from "./reducer/messageReducer";
import {initialPostState, postReducer} from "./reducer/postReducer";

function App() {

    const [stateMessage, messageDispatch] = useReducer(messageReducer, initialMessageState)

    const [statePost, postDispatch] = useReducer(postReducer, initialPostState)

    const addPost = (text: string) => {
            postDispatch({type: 'ADD-POST', payload: {text}});
    }
    const deletePost = (id: string) => {
        postDispatch({type: 'DELETE-POST', payload: {id}});
    }
    const addNewMessage = (text: string) => {
            messageDispatch({type: 'ADD-NEW-MESSAGE', payload: {text}});
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation friends={stateMessage.friendsBar}/>
                <Route path="/" exact render={() => <Profile deletePost={deletePost} addPost={addPost}
                                                             myPosts={statePost.profilePage.myPosts}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs addNewMessage={addNewMessage} dialog={stateMessage.messagesPage.dialog}
                                              messages={stateMessage.messagesPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile deletePost={deletePost} addPost={addPost}
                                                              myPosts={statePost.profilePage.myPosts}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
