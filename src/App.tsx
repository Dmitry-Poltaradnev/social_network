import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Users} from "./components/users/Users";
import {FriendsList} from "./components/friendList/FriendsList";

function App() {

    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Route path="/" exact render={() => <FriendsList/>}/>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/profile/:userId" render={() => <Profile/>}/>
            <Route path="/users" render={() => <Users/>}/>
            <Route path="/friendsList" render={() => <FriendsList/>}/>
        </div>
    );
}

export default App;
