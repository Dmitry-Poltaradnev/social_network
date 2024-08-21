import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom';
import {v1} from "uuid";

function App({state}: any) {

    const [postsArray, setPostsArray] = useState(
        [
            {id: v1(), text: 'Hello', likes: 12},
            {id: v1(), text: 'My second post', likes: 3},
            {id: v1(), text: 'Good buy!', likes: 5}
        ])


    const addPost = (title: string) => {
        setPostsArray([...postsArray, {id: v1(), text: title, likes: 0}])
    }

    console.log(postsArray)

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation friends={state.friendsBar}/>
                <Route path="/" exact render={() => <Profile addPost={addPost} myPosts={state.profilePage.myPosts}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialog={state.messagesPage.dialog}
                                                              messages={state.messagesPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile addPost={addPost} myPosts={state.profilePage.myPosts}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
