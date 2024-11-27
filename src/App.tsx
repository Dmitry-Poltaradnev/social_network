import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {DialogsComponent} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {UsersComponents} from "./components/users/Users";
import {FriendsListComponent} from "./components/friendList/FriendsList";
import {UserProfileComponent} from "./components/userProfile/UserProfile";
import Login from "./components/login/Login";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Route path="/" exact render={() => <UserProfileComponent/>}/>
            <Route path="/userProfile" exact render={() => <UserProfileComponent/>}/>
            <Route path="/dialogs" render={() => <DialogsComponent/>}/>
            <Route path="/profile/:userId" render={() => <Profile/>}/>
            <Route path="/users" render={() => <UsersComponents/>}/>
            <Route path="/friendsList" render={() => <FriendsListComponent/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>
    );
}

export default App;
