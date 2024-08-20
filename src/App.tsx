import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom';

function App({state}: any) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation friends={state.friendsBar}/>
                <Route path="/" exact render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialog={state.messagesPage.dialog}
                                                              messages={state.messagesPage.messages}/>}/>
                <Route path="/profile" render={() => <Profile myPosts={state.profilePage.myPosts}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
