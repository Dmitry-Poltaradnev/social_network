import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {MemberProfile} from "./components/membersNetwork/memberProfile/MemberProfile";
import {Route, Switch} from 'react-router-dom';
import {UsersComponents} from "./components/membersNetwork/Members";
import {UserProfileComponent} from "./components/mainUserProfile/UserProfile";
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./reducer/appReducer";
import {RootStateType} from "./reducer/store";
import {Loader} from "./components/common/loader/Loader";
import {Footer} from "./components/footer/Footer";

// Используем lazy для ленивой загрузки компонентов
const DialogsComponent = lazy(() => import('./components/dialogs/Dialogs'));
const FriendsListComponent = lazy(() => import("./components/friendList/FriendsList"));

function App() {
    const dispatch = useDispatch();
    const initialized = useSelector((state: RootStateType) => state.app.initialized);

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch]);

    if (!initialized) {
        return <Loader/>;
    }

    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <Route path="/" exact render={() => <UserProfileComponent/>}/>
                    <Route path="/userProfile" exact render={() => <UserProfileComponent/>}/>
                    <Route path="/profile/:userId" render={() => <MemberProfile/>}/>
                    <Route path="/users" render={() => <UsersComponents/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/dialogs" component={DialogsComponent}/>
                    <Route path="/friendsList" component={FriendsListComponent}/>
                    <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
