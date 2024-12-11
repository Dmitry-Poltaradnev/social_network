import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {MemberProfile} from "./components/membersNetwork/memberProfile/MemberProfile";
import {Route} from 'react-router-dom';
import {UsersComponents} from "./components/membersNetwork/Members";
import {UserProfileComponent} from "./components/mainUserProfile/UserProfile";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./reducer/appReducer";
import {RootStateType} from "./reducer/store";
import {Loader} from "./components/common/loader/Loader";

const DialogsComponent = lazy(() => import('./components/dialogs/Dialogs'));
const FriendsListComponent = lazy(() => import("./components/friendList/FriendsList"));


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
            <Route path="/profile/:userId" render={() => <MemberProfile/>}/>
            <Route path="/users" render={() => <UsersComponents/>}/>
            <Route path="/login" render={() => <Login/>}/>

            <Suspense fallback={<Loader/>}>
                <Route path="/dialogs" component={DialogsComponent}/>
                <Route path="/friendsList" component={FriendsListComponent}/>
            </Suspense>
        </div>
    );
}

export default App;
