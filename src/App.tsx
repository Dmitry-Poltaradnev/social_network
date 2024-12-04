import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/membersNetwork/memberNetwork/memberProfile/Profile";
import {DialogsComponent} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {UsersComponents} from "./components/membersNetwork/Users";
import {FriendsListComponent} from "./components/friendList/FriendsList";
import {UserProfileComponent} from "./components/mainUserProfile/UserProfile";
import Login from "./components/login/Login";
import {getLoginThunkCreator} from "./reducer/authReducer";
import {useDispatch} from "react-redux";

function App() {

    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(getLoginThunkCreator())
    // }, [dispatch])

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
