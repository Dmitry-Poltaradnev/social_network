import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {MemberProfile} from "./components/membersNetwork/memberProfile/MemberProfile";
import {DialogsComponent} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {UsersComponents} from "./components/membersNetwork/Members";
import {FriendsListComponent} from "./components/friendList/FriendsList";
import {UserProfileComponent} from "./components/mainUserProfile/UserProfile";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./reducer/appReducer";
import {RootStateType} from "./reducer/store";
import {Loader} from "./components/common/loader/Loader";

function App() {

    const dispatch = useDispatch()

    const initialized = useSelector((state: RootStateType) => state.app.initialized);

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialized) {
        return <Loader/>
    }

    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Route path="/" exact render={() => <UserProfileComponent/>}/>
            <Route path="/userProfile" exact render={() => <UserProfileComponent/>}/>
            <Route path="/dialogs" render={() => <DialogsComponent/>}/>
            <Route path="/profile/:userId" render={() => <MemberProfile/>}/>
            <Route path="/users" render={() => <UsersComponents/>}/>
            <Route path="/friendsList" render={() => <FriendsListComponent/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </div>
    );
}

export default App;
